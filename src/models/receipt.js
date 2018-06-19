/**
 * 入库单
 */
const Base = require('./base');
const pool = require('../common/mysql.js');
const moment = require('moment');
const async = require('async');

function Receipt() {
    var _action = {

        //总数
        _receiptQuantity: "select count(r.ID) as Quantity from Receipts r,ReceiptGoods p,Goods g,Vendors v,Members m  where r.ID=p.ReceiptID and p.GoodID=g.ID and r.VendorID=v.ID and r.OperatorID=m.ID and r.Date>=:StartTime and r.Date<=:EndTime and concat(r.ID,g.Name) like :KeyWord;",

        //列表
        _search: "SELECT r.*, m. NAME AS EmployeeName , group_concat(g. NAME) AS Goods ,(p.CostPrice*(p.Quantity-p.ReturnQuantity)) as Amount , p.CostPrice , v.Contact , v.Telephone , v.Address FROM Receipts r INNER JOIN ReceiptGoods p ON r.ID = p.ReceiptID INNER JOIN Goods g ON p.GoodID = g.ID INNER JOIN Vendors v ON r.VendorID = v.ID INNER JOIN Members m ON r.OperatorID = m.ID WHERE r.Date >=:StartTime AND r.Date <=:EndTime AND concat( r.VendorName , g.NAME , v.Telephone , v.Address , v.Contact) LIKE :KeyWord and r.Status in (:Status) GROUP BY r.ID ORDER BY r.CreateTime DESC LIMIT :Page,:Limit;",

        //详情
        _ReceiptInfo: "select r.*,v.Name,v.Telephone,v.Address,v.Contact,v.Remark from Receipts r left join Vendors v on r.VendorID=v.ID left join Members m on r.OperatorID=m.ID where r.ID=:ID;",

        _ReceiptGoodInfo: "select r.*,g.* from ReceiptGoods r inner join Goods g on r.GoodID=g.ID where r.ReceiptID=:ID;",

        //结算
        _settle: "update Receipts set status=:Status where ID=:ID "

    };

    var base = new Base();

    base.mixin(Receipt.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};

/**
 * 更新进货单|退货单信息
 *
 * 1、修改入库单信息
 * 2、修改子入库信息:如果子入库信息存在，则直接更新（只有未销售和未结算的入库单才能更新）；否则添加一个新的子入库记录；
 * 3、修改库存：如果该商品库存存在，则直接修改，否则添加一条新的库存
 * 4、增加库存记录信息
 * 
 * @param {Object} receiptData 进货单详情信息
 * @param {function} callback 回调
 */
Receipt.prototype.update = function (receiptData, callback) {
    let __updateReceipt = "update Receipts set VendorName=:VendorName,VendorID=:VendorID,OperatorID=:OperatorID,Date=:Date where ID=:ID;";

    let __updateReceiptGood = "update ReceiptGoods set Quantity=:Quantity,ExpiryDate=:ExpiryDate,BatchNo=:BatchNo,CostPrice=:CostPrice,Flag=:Flag,ValiableQuantity=Quantity-:ReturnQuantity,ReturnQuantity=:ReturnQuantity where ReceiptID=:ReceiptID and GoodID=:GoodID;";

    let __addReceiptGood = "insert into ReceiptGoods (ReceiptID,GoodID,CostPrice,Quantity,ValiableQuantity,ReturnQuantity,ExpiryDate,BatchNo) values (:ReceiptID,:GoodID,:CostPrice,:Quantity,:Quantity,:ReturnQuantity,:ExpiryDate,:BatchNo)";

    let __updateStock = "update Stocks set TotalQuantity=TotalQuantity+:DeltaQuantity,ValiableQuantity=ValiableQuantity+:DeltaQuantity where GoodID=:GoodID;";

    let __addStock = "insert into Stocks (GoodID,TotalQuantity,ValiableQuantity,CreateTime) values (:GoodID,:Quantity,:Quantity,now());";

    let __addStockChangeRecord = "insert into StockChangeRecords (OperatorID,GoodID,DeltaQuantity,Remark,Type,RelatedObjectID,SalePrice) values (:OperatorID,:GoodID,:DeltaQuantity,:Remark,:Type,:RelatedObjectID,0)";

    let __goodsOfReceipt = "select * from ReceiptGoods where ReceiptID=:ReceiptID";

    let tran = pool.getTran();

    console.log(new Date().getTime(), "任务开始");

    tran.beginTransaction(function (err) {
        if (err) {
            console.error(err);
            return callback(err);
        }

        console.log(new Date().getTime(), "1、修改入库单信息");
        //1、修改入库单信息
        tran.query(__updateReceipt, receiptData, function (err, result) {
            if (err) {
                tran.rollback(() => {
                    return callback(err, null);
                });

                return;
            }

            if (result) {
                let { ID: receiptId, ReceiptGoods, OperatorID, Flag } = receiptData;

                tran.query(__goodsOfReceipt, { ReceiptID: receiptId }, function (err, rows) {
                    if (err) {
                        tran.rollback(() => {
                            return callback(err, null);
                        });

                        return;
                    }

                    if (rows) {

                        let saveStock = function (good, delta, ccb) {
                            if (delta == 0) {
                                return ccb(null, { code: 0, message: "更新进货单成功" });
                            };

                            console.log(new Date().getTime(), "3.0 进货单修改更新库存");
                            //更新库存信息
                            tran.query(__updateStock, { DeltaQuantity: delta, GoodID: good.GoodID }, (err, result) => {
                                if (err) {
                                    return ccb(err);
                                }

                                let saveStockChangeRecord = (record, cb) => {
                                    console.log(new Date().getTime(), "4、添加库存变更记录；");
                                    //4、添加库存变更记录；
                                    tran.query(__addStockChangeRecord, record, (err, result) => {
                                        // console.log(err, result);
                                        if (err) {
                                            return cb(err);
                                        }

                                        if (result) {
                                            cb(null, { code: 0, message: "进货单修改库存完成", data: result });
                                        }
                                    })
                                }

                                if (result.affectedRows > 0) {
                                    saveStockChangeRecord({
                                        OperatorID, GoodID: good.GoodID, DeltaQuantity: delta, Remark: "入库单修改", Type: 6, RelatedObjectID: receiptId,
                                    }, ccb);
                                } else {
                                    console.log(new Date().getTime(), "3.1进货单添加更新库存");
                                    //4、添加库存变更记录；
                                    tran.query(__addStock, { GoodID: good.GoodID, Quantity: good.Quantity }, (err, result) => {
                                        if (err) {
                                            return ccb(err);
                                        }

                                        if (result) {
                                            let receiptId = result.insertId;

                                            saveStockChangeRecord({
                                                OperatorID, GoodID: good.GoodID, DeltaQuantity: delta, Remark: "入库单修改", Type: 6, RelatedObjectID: receiptId,
                                            }, ccb);
                                        }
                                    })
                                }
                            })
                        };

                        async.each(ReceiptGoods, function (good, callback) {
                            let __good = rows.find(r => r.GoodID == good.GoodID);

                            let delta = 0;

                            //退货单
                            if (Flag == 1) {
                                //-1 -- 该商品要标记为删除；
                                //退货单删除的商品，在总库存里要加上退货单初始退货的数量；
                                if (good.Flag == -1 && __good) {
                                    delta = __good.Quantity;
                                } else if (__good) {
                                    //变化量：新数量-原来数量-退回数量   原数：100、修改后数量：80、退回：10；当前库存应该是：70，变化数量：-30；
                                    delta = __good.Quantity - good.Quantity;
                                }
                            } else {  //进货单
                                //-1 -- 进货单该商品要标记为删除；
                                //删除的商品，在总库存里要减掉删除商品的有效库存；
                                if (good.Flag == -1 && __good) {
                                    delta = -good.Quantity;
                                } else if (__good) {
                                    //变化量：新数量-原来数量-退回数量   原数：100、修改后数量：80、退回：10；当前库存应该是：70，变化数量：-30；
                                    delta = good.Quantity - __good.Quantity;
                                }
                            }

                            console.log({ Flag, delta });

                            good.ReceiptID = receiptId;

                            console.log(new Date().getTime(), "2、修改子入库信息:如果子入库信息存在，则直接更新（只有未销售和未结算的入库单才能更新）；否则添加一个新的子入库记录；");
                            //2、修改子入库信息:如果子入库信息存在，则直接更新（只有未销售和未结算的入库单才能更新）；否则添加一个新的子入库记录；
                            tran.query(__updateReceiptGood, good, function (err, result) {
                                if (err) {
                                    return callback(err);
                                }

                                if (result.affectedRows == 0) {
                                    console.log(new Date().getTime(), "2.1、添加一个新的子入库记录；");
                                    //2.1、添加一个新的子入库记录；
                                    tran.query(__addReceiptGood, good, function (err, result) {
                                        if (err) {
                                            return callback(err);
                                        }

                                        if (result) {
                                            saveStock(good, delta, callback);
                                        }
                                    })
                                } else {
                                    saveStock(good, delta, callback);
                                }
                            })
                        }, function (err) {
                            console.log(new Date().getTime(), "END==>提交进货单库存更新完成");
                            if (err) {
                                tran.end();

                                console.log("提交进货单库存更新失败", err);

                                tran.rollback(() => {
                                    return callback(err);
                                });
                            } else {

                                tran.commit(err => {
                                    if (err) {
                                        tran.end();
                                        console.log("提交进货单库存更新失败", err);
                                        callback(err);
                                    } else {
                                        tran.end();
                                        console.log(new Date().getTime(), "END==>提交进货单库存更新成功");
                                        callback(null, { ID: receiptId })
                                    }
                                })
                            }
                        });
                    }
                })
            }
        })
    });
};


/**
 * 保存进货单|退货单详情
 * 
 * 1、添加入库单
 * 2、添加入库子订单
 * 3、修改库存
 * 4、增加库存记录信息
 * 
 * @param {Object} receiptData 进货单详情信息
 * @param {function} callback 回调
 */
Receipt.prototype.add = function (receiptData, callback) {
    let __addReceipt = "insert into Receipts (VendorName,VendorID,OperatorID,Date,CreateTime,Flag) values (:VendorName,:VendorID,:OperatorID,:Date,now(),:Flag);";

    let __addReceiptGood = "insert into ReceiptGoods (ReceiptID,GoodID,CostPrice,Quantity,ValiableQuantity,ExpiryDate,BatchNo) values (:ReceiptID,:GoodID,:CostPrice,:Quantity,:Quantity,:ExpiryDate,:BatchNo)";

    let __updateStock = "update Stocks set TotalQuantity=TotalQuantity+:Quantity,ValiableQuantity=ValiableQuantity+:Quantity where GoodID=:GoodID;";

    let __addStock = "insert into Stocks (GoodID,TotalQuantity,ValiableQuantity,CreateTime) values (:GoodID,:Quantity,:Quantity,now());";

    let __addStockChangeRecord = "insert into StockChangeRecords (OperatorID,GoodID,DeltaQuantity,Remark,Type,RelatedObjectID,SalePrice) values (:OperatorID,:GoodID,:DeltaQuantity,:Remark,:Type,:RelatedObjectID,:SalePrice)";

    let tran = pool.getTran();

    console.log(new Date().getTime(), "添加任务开始");

    tran.beginTransaction(function (err) {
        if (err) {
            return callback(err);
        }

        console.log(receiptData);

        tran.query(__addReceipt, receiptData, (err, result) => {
            if (err) {
                tran.rollback(() => {
                    return callback(err);
                });

                return;
            }

            console.log(new Date().getTime(), "添加进货单完成", result);

            if (result) {
                let receiptId = result.insertId;
                let { ReceiptGoods, OperatorID } = receiptData;

                async.each(ReceiptGoods, function (good, callback) {

                    good.ReceiptID = receiptId;

                    console.log(new Date().getTime(), "添加进货商品");
                    //添加进货单商品
                    tran.query(__addReceiptGood, good, (err, result) => {

                        if (err) {
                            return callback(err);
                        }

                        if (result) {

                            let { Quantity, GoodID } = good;
                            let Type = 1;

                            //如果是退货单，数量为相反
                            if (receiptData.Flag == 1) {
                                Quantity = -Quantity;
                                Remark = "退货单入库";
                                Type: 4
                            } else {
                                Remark = "进货单入库";
                                Type: 1
                            }

                            console.log(new Date().getTime(), "更新指定商品库存开始");

                            //更新指定商品库存
                            tran.query(__updateStock, { Quantity, GoodID }, (err, result) => {

                                if (err) {
                                    return callback(err);
                                }

                                if (result.affectedRows == 0) {
                                    //该商品库存不存在 ，添加该商品的库存
                                    tran.query(__addStock, { Quantity, GoodID }, (err, result) => {
                                        if (err) {
                                            return callback(err);
                                        }

                                        if (result.insertId > 0) {
                                            console.log(new Date().getTime(), "添加库存更新记录");
                                            //添加库存更新记录
                                            tran.query(__addStockChangeRecord, { OperatorID, GoodID: good.GoodID, DeltaQuantity: Quantity, Remark, Type, RelatedObjectID: receiptId, SalePrice: 0 }, (err, result) => {
                                                if (err) {
                                                    return callback(err);
                                                }

                                                if (result) {
                                                    callback(null, { code: 0, message: "更新库存信息成功" });
                                                }
                                            })
                                        }
                                    })
                                } else {
                                    console.log(new Date().getTime(), "添加库存更新记录");
                                    //添加库存更新记录
                                    tran.query(__addStockChangeRecord, { OperatorID, GoodID: good.GoodID, DeltaQuantity: Quantity, Remark, Type, RelatedObjectID: receiptId, SalePrice: 0 }, (err, result) => {
                                        if (err) {
                                            return callback(err);
                                        }

                                        if (result) {
                                            console.log(new Date().getTime(), "==》更新库存信息成功");
                                            callback(null, { code: 0, message: "更新库存信息成功" });
                                        }
                                    })
                                }
                            })
                        }
                    });

                }, function (err) {

                    console.log("====》提交进货单库保存完成");

                    if (err) {
                        tran.end();

                        console.log("提交进货单库存更新失败", err);

                        tran.rollback(() => {
                            return callback(err);
                        });
                    } else {
                        tran.commit(err => {
                            if (err) {
                                tran.end();
                                console.log("提交进货单库存更新失败", err);
                                callback(err);
                            } else {
                                tran.end();
                                console.log("提交进货单保存成功", err);
                                callback(null, { ID: receiptId })
                            }
                        })
                    }
                })
            }
        });
    });
}

/**
 * 入库药品清单
 * @param  {String} KeyWord 关键字
 * @param  {Number} Page 第几页
 * @param  {Number} Limit 每页显示几条
 * @param  {Date}   StartTime 开始时间
 * @param  {Date}   EndTime 结束时间
 */
Receipt.prototype.search = function (KeyWord, Page, Limit, StartTime, EndTime, Status, callback) {

    const that = this;

    async.parallel([
        function (cb) {
            that._receiptQuantity({
                KeyWord: `%${KeyWord}%`,
                StartTime,
                EndTime,
            }, function (err, db) {

                if (err) {
                    return cb(err, null);
                }
                cb(null, db[0]);
            });

        },

        function (cb) {
            let param = {
                KeyWord: `%${KeyWord}%`,
                Page,
                Limit,
                StartTime,
                EndTime,
                Status
            };

            console.log({ "查询进货单": param });

            that._search(param, function (err, db) {

                if (err) {
                    return cb(err, null);
                }

                cb(null, db);
            });
        }

    ], function (err, result) {

        if (err) {
            return callback(err, null);
        }

        const Quantity = result[0].Quantity;

        const rows = result[1];

        rows.forEach(function (element, index) {

            // rows[index].Amount = element.CostPrice * (element.Quantity - element.ReturnQuantity || 0)
            rows[index].Date = moment(rows[index].Date).format('YYYY-MM-DD');
            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        return callback(null, { Quantity, rows });

    });
};

/**
 * 入库单详情
 * @param  {Number} ID 入库单ID
 */
Receipt.prototype.receiptInfo = function (ID, callback) {
    let that = this;
    async.parallel([
        function (cb) {
            that._ReceiptInfo({
                ID: ID
            }, function (err, rows) {
                if (err) {
                    return cb(err, null);
                }

                cb(null, rows);
            });

        },
        function (cb) {
            that._ReceiptGoodInfo({
                ID: ID
            }, function (err, rows) {

                if (err) {
                    return cb(err, null);
                }

                cb(null, rows);

            });
        }
    ], function (err, result) {
        if (err) {
            return callback(err, null);;
        }

        const data = result[0];
        const ReceiptGood = result[1];

        if (err) {
            return callback(err, null);
        }

        if (data.length == 1) {
            data[0].Date = moment(data[0].CreateTime).format('YYYY-MM-DD');
            data[0].CreateTime = moment(data[0].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            data[0].UpdateTime = moment(data[0].UpdateTime).format('YYYY-MM-DD HH:mm:ss');
        }

        ReceiptGood.forEach(function (element, index) {

            ReceiptGood[index].ExpiryDate = moment(ReceiptGood[index].ExpiryDate).format('YYYY-MM-DD');

        });

        return callback(null, { data, ReceiptGood });
    });
};


/**
 * 入库单结算
 * @param  {Number} ID 结算ID
 */
Receipt.prototype.settle = function (ID, Status, callback) {

    this._settle({
        ID,
        Status
    }, function (err, rows) {

        if (err) {
            return callback(err, null);
        }

        callback(null, rows);

    });

};

module.exports.Receipt = new Receipt();
// module.exports.ReceiptTran = new ReceiptTran();