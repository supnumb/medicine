/**
 * 订单
 */
const Base = require('./base');
const pool = require('../common/mysql.js');
const moment = require('moment');
const async = require('async');

function Order() {
    var _action = {

        //订单记录搜索(MemberID)
        _search: "select * from Orders where MemberID=:MemberID;",

        //订单记录列表
        _orderList: "select o.*,m.Name,m.MobilPhone,(select name from Members where ID=o.EmployeeID) as EmployeeName,GROUP_CONCAT(g.GoodName) as GoodNames from Orders o left join Members m on o.MemberID=m.ID left join OrderGoods g on o.ID=g.OrderID where m.MobilPhone like :KeyWord group by o.ID order by o.Date desc limit :Page,:Limit;",

        //订单记录详情
        _orderInfo: "select * from Orders where ID=:ID;",

        //订单商品
        _orderGood: "select o.*,g.Name,g.OfficalName,g.Dimension,g.FormOfDrug,g.Unit,g.Manufacturer from OrderGoods o left join Goods g on o.GoodID=g.ID where o.OrderID=:ID;",

        //订单列表总数
        _orderQuantity: "select count(1) as Quantity from Orders o left join Members m on o.MemberID=m.ID where m.MobilPhone like :KeyWord and o.Date>=:StartTime and o.Date<=:EndTime",

        //收银统计
        _cash: "select ID,EmployeeID,PayStyle,TotalAmount,ReceiptAmount,CreateTime,UpdateTime from Orders where date_format(CreateTime,'%Y-%m-%d')>=:StartTime and date_format(CreateTime,'%Y-%m-%d')<=:EndTime;",

        //销售员毛利率统计//销售员每个订单的毛利率
        _rate: "select o.ID,m.Name,o.EmployeeID,o.ReceiptAmount,sum(g.TotalCostPrice) as TotalCostPrice from Orders o left join OrderGoods g on o.ID=g.OrderID left join Members m on o.EmployeeID=m.ID where date_format(o.CreateTime,'%Y-%m-%d')>=:StartTime and date_format(o.CreateTime,'%Y-%m-%d')<=:EndTime group by o.ID desc;",

        //销售商品统计
        _good: "select g.GoodID,g.GoodName,sum(g.Quantity) as Quantity,o.CreateTime from Orders o left join OrderGoods g on o.ID=g.OrderID where date_format(o.CreateTime,'%Y-%m-%d')>=:StartTime and date_format(o.CreateTime,'%Y-%m-%d')<=:EndTime group by g.GoodID;",

    };

    var base = new Base();

    base.mixin(Order.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};

function OrderTran() {

}


/**
 * 订单记录搜索
 * @param  {String} MemberID 会员ID
 */
Order.prototype.search = function(MemberID, callback) {

    this._search({
        MemberID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function(element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        callback(null, rows);
    });
};

/**
 * 订单记录列表
 * @param  {String} KeyWord 关键字
 * @param  {Number} Page 第几页
 * @param  {Number} Limit 每页几条
 * @param  {Date}   StartTime 开始时间
 * @param  {Date}   EndTime 结束时间
 */
Order.prototype.orderList = function(KeyWord, Page, Limit, StartTime, EndTime, callback) {

    const that = this;

    async.parallel([

        function(cb) {

            that._orderQuantity({
                KeyWord: `%${KeyWord}%`,
                StartTime,
                EndTime
            }, function(err, db) {
                if (err) {
                    return cb(err, null);
                }

                cb(null, db[0]);

            });

        },

        function(cb) {

            that._orderList({
                KeyWord: `%${KeyWord}%`,
                Page,
                Limit,
                StartTime,
                EndTime
            }, function(err, db) {
                if (err) {
                    return cb(err, null);
                }

                cb(null, db);
            });

        }

    ], function(err, result) {

        if (err) {
            return callback(err, null);
        }

        const Quantity = result[0].Quantity;

        const rows = result[1];

        rows.forEach(function(element, index) {
            //支付方式 1、微信，2、支付宝，3、现金，4、货到付款，5、二维码
            let PayStyleLabel = '';

            switch (element.PayStyle) {
                case 1:
                    PayStyleLabel = '微信';
                case 2:
                    PayStyleLabel = '支付宝';
                case 3:
                    PayStyleLabel = '现金';
                case 4:
                    PayStyleLabel = '货到付款';
                case 5:
                    PayStyleLabel = '二维码';
            }

            rows[index].PayStyleLabel = PayStyleLabel;

            rows[index].Date = moment(rows[index].Date).format('YYYY-MM-DD');
            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        return callback(null, { Quantity, rows });

    });

};

/**
 * 订单记录详情
 */
Order.prototype.orderInfo = function(ID, callback) {

    const that = this;

    async.parallel([

        function(cb) {
            that._orderInfo({
                ID
            }, function(err, db) {
                if (err) {
                    return cb(err, null);
                }

                cb(null, db);
            });

        },

        function(cb) {

            that._orderGood({
                ID
            }, function(err, db) {
                if (err) {
                    return cb(err, null);
                }

                cb(null, db);
            });

        }

    ], function(err, result) {

        if (err) {
            return callback(err, null);
        }

        const rows = result[0];
        const goods = result[1];

        if (rows.length == 1) {
            rows[0].Date = moment(rows[0].Date).format('YYYY-MM-DD');
            rows[0].CreateTime = moment(rows[0].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[0].UpdateTime = moment(rows[0].UpdateTime).format('YYYY-MM-DD HH:mm:ss');
        }

        return callback(null, { rows, goods });

    });

}


/**
 * 创建订单
 * @param  {Object} Obj 订单信息
 * 
 * 1、创建订单
 * 2、根据商品ID查询入库单(获取入库单ID,成本价，该入库单有效数量)
 * 3、创建子订单
 * 4、修改入库单
 * 5、修改库存
 * 6、添加库存变动记录
 */

/**
 * 修改订单
 * @param  {Object} Obj 订单信息
 * 
 * 1、修改订单
 * 2、查询子订单信息
 * 3、比对子订单
 * 3、返还入库单数量
 * 4、删除子订单
 * 5、根据商品ID查询入库单(获取入库单ID,成本价，该入库单有效数量)
 * 6、创建子订单
 * 7、修改入库单
 * 8、修改库存
 * 9、添加库存变动记录
 */

OrderTran.prototype.edit = function(Obj, callback) {

    let tran = pool.getTran();

    const { ID, OperatorID, Goods } = Obj;

    tran.beginTransaction(function(err) {

        if (err) {
            return callback(err, null);
        }

        if (!ID) {

            let Order_add = 'insert into Orders (MemberID,OperatorID,EmployeeID,Address,Connact,Telephone,TotalAmount,ReceiptAmount,PayStyle,DeliveryCompany,DeliveryFee,DeliverCode,DeliverReceiptFee,Remark,Date,CreateTime) values (:MemberID,:OperatorID,:EmployeeID,:Address,:Connact,:Telephone,:TotalAmount,:ReceiptAmount,:PayStyle,:DeliveryCompany,:DeliveryFee,:DeliverCode,:DeliverReceiptFee,:Remark,:Date,now())';

            let ReceiptGood_search = 'select ID,ReceiptID,GoodID,CostPrice,ValiableQuantity from ReceiptGoods where GoodID=:GoodID and ValiableQuantity>0;';

            let OrderGood_add = 'insert into OrderGoods(GoodID,OrderID,GoodName,Quantity,FinalPrice,TotalCostPrice,ReceiptGoodID,ReceiptQuantity) values ';

            let ReceiptGood_update = 'update ReceiptGoods set ValiableQuantity= case ';

            let Stock_update = 'update Stocks set ValiableQuantity= case GoodID';

            let Stock_update_child = 'SaledQuantity= case GoodID';

            let StockChangeRecord_add = 'insert into StockChangeRecords (OperatorID,GoodID,DeltaQuantity,Remark,Type,RelatedObjectID,SalePrice,CreateTime) values ';

            tran.query(Order_add, Obj, function(err, rows) {

                if (err) {
                    return callback(err, null);
                }

                const OrderID = rows.insertId;

                console.log("OrderID", OrderID);

                let ReceiptGoodIDs = '';

                async.eachSeries(Goods, function(item, cb) {

                    let { GoodID, Name, Quantity, FinalPrice } = item;

                    let Quantity_num = Quantity;

                    let TotalCostPrice = 0;

                    let ReceiptGoodID = '';

                    let ReceiptQuantity = '';

                    pool.query(ReceiptGood_search, {
                        GoodID: GoodID
                    }, function(err, arrs) {

                        if (err) {
                            return cb(err, null);
                        }

                        for (let i = 0; i < arrs.length; i++) {

                            if (arrs[i].ValiableQuantity >= Quantity_num) {
                                TotalCostPrice += arrs[i].CostPrice * Quantity_num;
                                arrs[i].ValiableQuantity = arrs[i].ValiableQuantity - Quantity_num;
                                ReceiptQuantity += Quantity_num;
                                Quantity_num = 0;
                                ReceiptGoodID += arrs[i].ID;
                                ReceiptGoodIDs += arrs[i].ID + ",";
                                ReceiptGood_update += ` when ID=${arrs[i].ID} then ${arrs[i].ValiableQuantity} `;
                            } else {
                                TotalCostPrice += arrs[i].CostPrice * arrs[i].ValiableQuantity;
                                Quantity_num -= arrs[i].ValiableQuantity;
                                ReceiptQuantity += arrs[i].ValiableQuantity + ",";
                                arrs[i].ValiableQuantity = 0;
                                ReceiptGoodID += arrs[i].ID + ",";
                                ReceiptGoodIDs += arrs[i].ID + ",";
                                ReceiptGood_update += ` when ID=${arrs[i].ID} then 0 `
                            }
                        }

                        if (Quantity_num > 0) {
                            return cb({ message: Name + "商品库存不足!" }, null);
                        }

                        OrderGood_add += `(${GoodID},${OrderID},'${Name}', ${Quantity}, ${FinalPrice},${TotalCostPrice},'${ReceiptGoodID}','${ReceiptQuantity}'),`;

                        Stock_update += ` when ${GoodID} then ValiableQuantity-${Quantity} `;

                        Stock_update_child += ` when ${GoodID} then SaledQuantity+${Quantity} `;

                        StockChangeRecord_add += `(${OperatorID},${GoodID},${Quantity},'备注',2,${OrderID},${TotalCostPrice},now()),`;


                        cb(null, arrs);

                    });


                }, function(err) {

                    if (err) {
                        tran.rollback(() => {
                            return callback(err, null);
                        });
                    } else {

                        ReceiptGoodIDs = ReceiptGoodIDs.slice(0, ReceiptGoodIDs.length - 1);

                        OrderGood_add = OrderGood_add.slice(0, OrderGood_add.length - 1);

                        ReceiptGood_update += ` end where ID in (${ReceiptGoodIDs});`;

                        Stock_update = Stock_update + ' end,' + Stock_update_child + ' end where GoodID in (' + ReceiptGoodIDs + ')';

                        StockChangeRecord_add = StockChangeRecord_add.slice(0, StockChangeRecord_add.length - 1);

                        //console.log("OrderGood_add", OrderGood_add);
                        //console.log("-----------------------------");
                        //console.log("ReceiptGood_update", ReceiptGood_update);
                        //console.log("-----------------------------");
                        //console.log("Stock_update", Stock_update);
                        //console.log("-----------------------------");
                        //console.log("StockChangeRecord_add", StockChangeRecord_add);

                        async.parallel([

                            function(cb) {

                                tran.query(OrderGood_add, {}, function(err, db) {

                                    if (err) {
                                        return cb(err, null);
                                    }

                                    cb(null, db);

                                });

                            },

                            function(cb) {

                                tran.query(ReceiptGood_update, {}, function(err, db) {

                                    if (err) {
                                        return cb(err, null);
                                    }

                                    cb(null, db);

                                });

                            },

                            function(cb) {

                                tran.query(Stock_update, {}, function(err, db) {

                                    if (err) {
                                        return cb(err, null);
                                    }

                                    cb(null, db);

                                });

                            },

                            function(cb) {

                                tran.query(StockChangeRecord_add, {}, function(err, db) {

                                    if (err) {
                                        return cb(err, null);
                                    }

                                    cb(null, db);

                                });

                            }

                        ], function(err, result) {


                            if (err) {
                                tran.rollback();
                                return callback(err, null);
                            }


                            tran.commit(function(err) {

                                if (err) {
                                    console.log("提交事务失败", err);
                                    tran.rollback();
                                    return callback(err, null);
                                }

                                console.log("aaaa", OrderID);
                                return callback(null, { ID: OrderID });

                            });

                        });

                    }

                });

            });

        } else {

            let Order_update = 'update Orders set MemberID=:MemberID,OperatorID=:OperatorID,Address=:Address,Connact=:Connact,Telephone=:Telephone,TotalAmount=:TotalAmount,ReceiptAmount=:ReceiptAmount,PayStyle=:PayStyle,DeliveryCompany=:DeliveryCompany,DeliveryFee=:DeliveryFee,DeliverCode=:DeliverCode,DeliverReceiptFee=:DeliverReceiptFee,Remark=:Remark,Date=:Date where ID=:ID';

            let OrderGood_search = 'select ID,GoodID,Quantity,ReceiptGoodID,ReceiptQuantity from OrderGoods where OrderID=:ID;';

            let OrderGood_delete = 'delete from OrderGoods where OrderID=:OrderID;';

            let ReceiptGood_update = 'update ReceiptGoods set ValiableQuantity= ';

            let Stock_update = 'update Stocks set ValiableQuantity= ';

            const OrderID = ID;

            tran.query(Order_update, Obj, function(err, rows) {

                if (err) {
                    tran.rollback(() => {
                        return callback(err, null);
                    });
                }

                let add_arr = [],
                    upd_arr = [],
                    del_arr = [],
                    update_ReceiptQuantity = '',
                    update_ReceiptGoodID = '',
                    update_Stock = '0',
                    update_Stock_Valiable = '',
                    update_Stock_Saled = '';


                pool.query(OrderGood_search, { ID }, function(err, rows) {

                    for (let i = 0; i < rows.length; i++) {

                        let { ReceiptGoodID, ReceiptQuantity } = rows[i];

                        for (let j = 0; j < Goods.length; j++) {

                            if (rows[i].GoodID == Goods[j].GoodID) {

                                if (rows[i].Quantity == Goods[j].Quantity) {

                                    rows[i].log = 'initial';
                                    Goods[j].log = 'initial';
                                } else {
                                    rows[i].log = 'initial';
                                    Goods[j].log = 'update';
                                    Goods[j].update_num = rows[i].Quantity - Goods[j].Quantity;
                                }
                            }
                        }

                        let ReceiptGoodIDArr = ReceiptGoodID.split(",");
                        let ReceiptQuantityArr = ReceiptQuantity.split(",");

                        ReceiptGoodIDArr.forEach(function(element, index) {
                            update_ReceiptGoodID += `${element},`;
                            update_ReceiptQuantity += `ValiableQuantity+${ReceiptQuantityArr[index]},`;
                        });

                        update_Stock += `,${rows[i].GoodID}`;
                        update_Stock_Valiable += `ValiableQuantity+${rows[i].Quantity},`;
                        update_Stock_Saled += `SaledQuantity-${rows[i].Quantity},`;
                    }

                    update_ReceiptGoodID = update_ReceiptGoodID.slice(0, update_ReceiptGoodID.length - 1);
                    update_ReceiptQuantity = update_ReceiptQuantity.slice(0, update_ReceiptQuantity.length - 1);
                    update_Stock_Valiable = update_Stock_Valiable.slice(0, update_Stock_Valiable.length - 1);
                    update_Stock_Saled = update_Stock_Saled.slice(0, update_Stock_Saled.length - 1);

                    ReceiptGood_update += ` ELT (ID,${update_ReceiptQuantity}) where ID in (${update_ReceiptGoodID});`;
                    Stock_update += ` ELT (GoodID,${update_Stock_Valiable}),SaledQuantity= ELT (GoodID,${update_Stock_Saled}) where ID in (${update_Stock});`;

                    rows.forEach(function(element, index) {

                        if (!element.log) {
                            del_arr.push(element);
                        }

                    });

                    Goods.forEach(function(element, index) {

                        if (!element.log) {
                            add_arr.push(element);
                        }

                        if (element.log == 'update') {
                            upd_arr.push(Goods[index]);
                        }

                    });

                    //添加的商品
                    //console.log("add_arr", add_arr);
                    //修改的商品
                    //console.log("upd_arr", upd_arr);
                    //删除的商品
                    //console.log("del_arr", del_arr);

                    //入库单修改
                    //console.log("ReceiptGood_update", ReceiptGood_update);

                    //库存修改
                    //console.log("Stock_update", Stock_update);

                    if (add_arr.length == 0 && upd_arr.length == 0 && del_arr.length == 0) {
                        tran.commit(function(err) {

                            if (err) {
                                console.log("提交事务失败", err);
                                tran.rollback();
                                return callback(err, null);
                            }

                            return callback(null, 1);

                        });
                    } else {

                        async.parallel([

                            function(cb) {

                                pool.query(OrderGood_delete, { OrderID }, function(err, db) {

                                    if (err) {
                                        return cb(err, null);
                                    }

                                    cb(null, db);

                                });

                            },

                            function(cb) {

                                pool.query(ReceiptGood_update, {}, function(err, db) {

                                    if (err) {
                                        return cb(err, null);
                                    }

                                    cb(null, db);

                                });

                            },

                            function(cb) {

                                pool.query(Stock_update, {}, function(err, db) {

                                    if (err) {
                                        return cb(err, null);
                                    }

                                    cb(null, db);

                                });

                            }

                        ], function(err, result) {

                            if (err) {
                                return callback(err, null);
                            }

                            let ReceiptGood_search = 'select ID,ReceiptID,GoodID,CostPrice,ValiableQuantity from ReceiptGoods where GoodID=:GoodID and ValiableQuantity>0;';

                            let OrderGood_add = 'insert into OrderGoods(GoodID,OrderID,GoodName,Quantity,FinalPrice,TotalCostPrice,ReceiptGoodID,ReceiptQuantity) values ';

                            let ReceiptGood_update = 'update ReceiptGoods set ValiableQuantity= case ';

                            let Stock_update = 'update Stocks set ValiableQuantity= case GoodID';

                            let Stock_update_child = 'SaledQuantity= case GoodID';

                            let StockChangeRecord_add = 'insert into StockChangeRecords (OperatorID,GoodID,DeltaQuantity,Remark,Type,RelatedObjectID,SalePrice,CreateTime) values ';

                            let ReceiptGoodIDs = '';

                            async.eachSeries(Goods, function(item, cb) {

                                let { GoodID, Name, Quantity, FinalPrice } = item;

                                let Quantity_num = Quantity;

                                let TotalCostPrice = 0;

                                let ReceiptGoodID = '';

                                let ReceiptQuantity = '';

                                pool.query(ReceiptGood_search, {
                                    GoodID: GoodID
                                }, function(err, arrs) {

                                    if (err) {
                                        return cb(err, null);
                                    }

                                    for (let i = 0; i < arrs.length; i++) {

                                        if (arrs[i].ValiableQuantity >= Quantity_num) {
                                            TotalCostPrice += arrs[i].CostPrice * Quantity_num;
                                            arrs[i].ValiableQuantity = arrs[i].ValiableQuantity - Quantity_num;
                                            ReceiptQuantity += Quantity_num;
                                            Quantity_num = 0;
                                            ReceiptGoodID += arrs[i].ID;
                                            ReceiptGoodIDs += arrs[i].ID + ",";
                                            ReceiptGood_update += ` when ID=${arrs[i].ID} then ${arrs[i].ValiableQuantity} `;
                                        } else {
                                            TotalCostPrice += arrs[i].CostPrice * arrs[i].ValiableQuantity;
                                            Quantity_num -= arrs[i].ValiableQuantity;
                                            ReceiptQuantity += arrs[i].ValiableQuantity + ",";
                                            arrs[i].ValiableQuantity = 0;
                                            ReceiptGoodID += arrs[i].ID + ",";
                                            ReceiptGoodIDs += arrs[i].ID + ",";
                                            ReceiptGood_update += ` when ID=${arrs[i].ID} then 0 `
                                        }
                                    }

                                    if (Quantity_num > 0) {
                                        return cb({ message: Name + "商品库存不足!" }, null);
                                    }

                                    OrderGood_add += `(${GoodID},${OrderID},'${Name}', ${Quantity}, ${FinalPrice},${TotalCostPrice},'${ReceiptGoodID}','${ReceiptQuantity}'),`;

                                    Stock_update += ` when ${GoodID} then ValiableQuantity-${Quantity} `;

                                    Stock_update_child += ` when ${GoodID} then SaledQuantity+${Quantity} `;

                                    StockChangeRecord_add += `(${OperatorID},${GoodID},${Quantity},'备注',2,${OrderID},${TotalCostPrice},now()),`;


                                    cb(null, arrs);

                                });


                            }, function(err) {

                                if (err) {
                                    tran.rollback(() => {
                                        return callback(err, null);
                                    });
                                } else {

                                    ReceiptGoodIDs = ReceiptGoodIDs.slice(0, ReceiptGoodIDs.length - 1);

                                    OrderGood_add = OrderGood_add.slice(0, OrderGood_add.length - 1);

                                    ReceiptGood_update += ` end where ID in (${ReceiptGoodIDs});`;

                                    Stock_update = Stock_update + ' end,' + Stock_update_child + ' end where GoodID in (' + ReceiptGoodIDs + ')';

                                    StockChangeRecord_add = StockChangeRecord_add.slice(0, StockChangeRecord_add.length - 1);

                                    //console.log("OrderGood_add", OrderGood_add);
                                    //console.log("-----------------------------");
                                    //console.log("ReceiptGood_update", ReceiptGood_update);
                                    //console.log("-----------------------------");
                                    //console.log("Stock_update", Stock_update);
                                    //console.log("-----------------------------");
                                    //console.log("StockChangeRecord_add", StockChangeRecord_add);

                                    async.parallel([

                                        function(cb) {

                                            tran.query(OrderGood_add, {}, function(err, db) {

                                                if (err) {
                                                    return cb(err, null);
                                                }

                                                cb(null, db);

                                            });

                                        },

                                        function(cb) {

                                            tran.query(ReceiptGood_update, {}, function(err, db) {

                                                if (err) {
                                                    return cb(err, null);
                                                }

                                                cb(null, db);

                                            });

                                        },

                                        function(cb) {

                                            tran.query(Stock_update, {}, function(err, db) {

                                                if (err) {
                                                    return cb(err, null);
                                                }

                                                cb(null, db);

                                            });

                                        },

                                        function(cb) {

                                            tran.query(StockChangeRecord_add, {}, function(err, db) {

                                                if (err) {
                                                    return cb(err, null);
                                                }

                                                cb(null, db);

                                            });

                                        }

                                    ], function(err, result) {


                                        if (err) {
                                            tran.rollback();
                                            return callback(err, null);
                                        }


                                        tran.commit(function(err) {

                                            if (err) {
                                                console.log("提交事务失败", err);
                                                tran.rollback();
                                                return callback(err, null);
                                            }

                                            return callback(null, 1);

                                        });

                                    });

                                }

                            });

                        });
                    }

                });

            });

        }

    });

};


OrderTran.prototype.cancel = function(ID, callback) {

    let tran = pool.getTran();

    tran.beginTransaction(function(err) {

        if (err) {
            return callback(err, null);
        }

        let Order_update = 'update Orders set status=2 where ID=:ID';

        let OrderGood_search = 'select ID,GoodID,Quantity,ReceiptGoodID,ReceiptQuantity from OrderGoods where OrderID=:ID;';

        let ReceiptGood_update = 'update ReceiptGoods set ValiableQuantity= ';

        let Stock_update = 'update Stocks set ValiableQuantity= ';

        const OrderID = ID;

        tran.query(Order_update, { ID }, function(err, rows) {

            if (err) {
                tran.rollback(() => {
                    return callback(err, null);
                });
            }

            let add_arr = [],
                upd_arr = [],
                del_arr = [],
                update_ReceiptQuantity = '',
                update_ReceiptGoodID = '',
                update_Stock = '0',
                update_Stock_Valiable = '',
                update_Stock_Saled = '';


            pool.query(OrderGood_search, { ID }, function(err, rows) {

                for (let i = 0; i < rows.length; i++) {

                    let { ReceiptGoodID, ReceiptQuantity } = rows[i];

                    let ReceiptGoodIDArr = ReceiptGoodID.split(",");
                    let ReceiptQuantityArr = ReceiptQuantity.split(",");

                    ReceiptGoodIDArr.forEach(function(element, index) {
                        update_ReceiptGoodID += `${element},`;
                        update_ReceiptQuantity += `ValiableQuantity+${ReceiptQuantityArr[index]},`;
                    });

                    update_Stock += `,${rows[i].GoodID}`;
                    update_Stock_Valiable += `ValiableQuantity+${rows[i].Quantity},`;
                    update_Stock_Saled += `SaledQuantity-${rows[i].Quantity},`;
                }

                update_ReceiptGoodID = update_ReceiptGoodID.slice(0, update_ReceiptGoodID.length - 1);
                update_ReceiptQuantity = update_ReceiptQuantity.slice(0, update_ReceiptQuantity.length - 1);
                update_Stock_Valiable = update_Stock_Valiable.slice(0, update_Stock_Valiable.length - 1);
                update_Stock_Saled = update_Stock_Saled.slice(0, update_Stock_Saled.length - 1);

                ReceiptGood_update += ` ELT (ID,${update_ReceiptQuantity}) where ID in (${update_ReceiptGoodID});`;
                Stock_update += ` ELT (GoodID,${update_Stock_Valiable}),SaledQuantity= ELT (GoodID,${update_Stock_Saled}) where ID in (${update_Stock});`;

                if (rows.length == 0) {

                    tran.commit(function(err) {

                        if (err) {
                            console.log("提交事务失败", err);
                            tran.rollback();
                            return callback(err, null);
                        }

                        return callback(null, 1);

                    });
                } else {

                    async.parallel([

                        function(cb) {

                            tran.query(ReceiptGood_update, {}, function(err, db) {

                                if (err) {
                                    return cb(err, null);
                                }

                                cb(null, db);

                            });

                        },

                        function(cb) {

                            tran.query(Stock_update, {}, function(err, db) {

                                if (err) {
                                    return cb(err, null);
                                }

                                cb(null, db);

                            });

                        }

                    ], function(err, result) {

                        if (err) {
                            return callback(err, null);
                        }

                        tran.commit(function(err) {

                            if (err) {
                                console.log("提交事务失败", err);
                                tran.rollback();
                                return callback(err, null);
                            }

                            return callback(null, 1);

                        });

                    });

                }

                //入库单修改
                //console.log("ReceiptGood_update", ReceiptGood_update);

                //库存修改
                //console.log("Stock_update", Stock_update);

            });

        });

    });

}


Order.prototype.cash = function(StartTime, EndTime, callback) {

    this._cash({
        StartTime,
        EndTime
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function(element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        callback(null, rows);
    });

}


Order.prototype.rate = function(StartTime, EndTime, callback) {

    this._rate({
        StartTime,
        EndTime
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function(element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        callback(null, rows);
    });

}

Order.prototype.good = function(StartTime, EndTime, callback) {

    this._good({
        StartTime,
        EndTime
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function(element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        callback(null, rows);
    });

}


module.exports.Order = new Order();

module.exports.OrderTran = new OrderTran();

// const m = new OrderTran();

// const Obj = {
//     ID: 70,
//     MemberID: 1,
//     OperatorID: 1,
//     Address: '北京',
//     Connact: '测试',
//     Telephone: '10086',
//     TotalAmount: 128,
//     ReceiptAmount: 128,
//     PayStyle: 1,
//     DeliveryCompany: '',
//     DeliveryFee: '',
//     DeliverCode: '',
//     DeliverReceiptFee: '',
//     Remark: '',
//     Date: '2018-04-30',
//     Goods: [
//         { GoodID: 1, Name: '感冒药', Quantity: 5, FinalPrice: 10 },
//         { GoodID: 2, Name: '退烧药', Quantity: 5, FinalPrice: 6 }
//     ]
// };

// m.edit(Obj, function(err, rows) {

//     console.log(err);

//     console.log(rows);

// });