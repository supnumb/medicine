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
        _search: "SELECT r.*, m. NAME AS EmployeeName , group_concat(g. NAME) AS Goods , p.Amount , p.CostPrice , v.Contact , v.Telephone , v.Address FROM Receipts r INNER JOIN ReceiptGoods p ON r.ID = p.ReceiptID INNER JOIN Goods g ON p.GoodID = g.ID INNER JOIN Vendors v ON r.VendorID = v.ID INNER JOIN Members m ON r.OperatorID = m.ID WHERE r.Date >=:StartTime AND r.Date <=:EndTime AND concat( r.VendorName , g.NAME , v.Telephone , v.Address , v.Contact) LIKE :KeyWord and r.Status in (:Status) GROUP BY r.ID ORDER BY r.Date DESC LIMIT :Page,:Limit;",

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

function ReceiptTran() {

}


/**
 * 入库单添加
 * @param  {Object} Obj 入库单信息
 * 1、添加入库单
 * 2、添加入库子订单
 * 3、修改库存
 * 4、增加库存记录信息
 * 
 */
ReceiptTran.prototype.add = function (Obj, callback) {

    let tran = pool.getTran();

    tran.beginTransaction(function (err) {

        if (err) {
            return callback(err, null);
        }

        let { ReceiptGoods, OperatorID } = Obj

        let Receipt_add = 'insert into Receipts (VendorName,VendorID,OperatorID,Date,CreateTime) values (:VendorName,:VendorID,:OperatorID,:Date,now());';

        let StockChange_add = 'insert into StockChangeRecords (OperatorID,GoodID,DeltaQuantity,Remark,Type,RelatedObjectID,SalePrice) values ';

        tran.query(Receipt_add, Obj, function (err, rows) {

            if (err) {
                tran.rollback(() => {
                    return callback(err, null);
                });

                return;
            }


            const ReceiptID = rows.insertId;

            async.eachSeries(ReceiptGoods, function (item, cb) {

                let { GoodID, CostPrice, Quantity, ExpiryDate, BatchNo } = item;

                let ValiableQuantity = Quantity;

                let ReceiptGood_add = 'insert into ReceiptGoods (ReceiptID,GoodID,CostPrice,Quantity,ValiableQuantity,ExpiryDate,BatchNo) values (:ReceiptID,:GoodID,:CostPrice,:Quantity,:ValiableQuantity,:ExpiryDate,:BatchNo)';
                let Stock_update = 'update Stocks set TotalQuantity=TotalQuantity+:Quantity,ValiableQuantity=ValiableQuantity+:Quantity where GoodID=:GoodID;';
                let Stock_add = 'insert into Stocks (GoodID,TotalQuantity,ValiableQuantity,CreateTime) values (:GoodID,:Quantity,:Quantity,now());';

                pool.query(ReceiptGood_add, {
                    ReceiptID,
                    GoodID,
                    CostPrice,
                    Quantity,
                    ValiableQuantity,
                    ExpiryDate,
                    BatchNo
                }, function (err, arrs) {

                    if (err) {
                        return cb(err, null);
                    }

                    StockChange_add = StockChange_add + `(${OperatorID},${GoodID},${Quantity},'药品入库统计',1,${ReceiptID},0),`;

                    pool.query(Stock_update, { Quantity, GoodID }, function (err, rows) {

                        if (err) {
                            return cb(err, null);
                        }

                        if (rows.affectedRows == 0) {

                            pool.query(Stock_add, { Quantity, GoodID }, function (err, rows) {

                                if (err) {
                                    return cb(err, null);
                                }

                                return cb(null, 1);

                            });

                        } else {
                            return cb(null, 1);
                        }


                    });

                });


            }, function (err) {

                if (err) {
                    tran.rollback(() => {
                        return callback(err, null);
                    });
                } else {

                    StockChange_add = StockChange_add.slice(0, StockChange_add.length - 1);

                    pool.query(StockChange_add, {}, function (err, rows) {

                        if (err) {
                            tran.rollback(() => {
                                return callback(err, null);
                            });
                        }

                        tran.commit(function (err) {

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

    });

};

/**
 * 入库单退回
 * @param  {Object} Obj 入库单信息
 * 1、修改入库单信息
 * 2、修改子入库信息
 * 3、修改库存
 * 4、增加库存记录信息
 * 
 */
ReceiptTran.prototype.update = function (Obj, callback) {

    let tran = pool.getTran();

    tran.beginTransaction(function (err) {

        if (err) {
            return callback(err, null);
        }

        let { ReceiptGoods, OperatorID, ID } = Obj;

        let Receipt_cancel = 'update Receipts set VendorName=:VendorName,VendorID=:VendorID,OperatorID=:OperatorID,Date=:Date where ID=:ID;';

        let StockChange_add = 'insert into StockChangeRecords (OperatorID,GoodID,DeltaQuantity,Remark,Type,RelatedObjectID,SalePrice) values ';

        tran.query(Receipt_cancel, Obj, function (err, rows) {

            if (err) {
                tran.rollback(() => {
                    return callback(err, null);
                });
            }

            const ReceiptID = ID;

            async.eachSeries(ReceiptGoods, function (item, cb) {

                let { GoodID, CostPrice, Quantity, ReturnQuantity, ExpiryDate, BatchNo } = item;

                let ReceiptGood_update = 'update ReceiptGoods set Quantity=Quantity-:ReturnQuantity,ValiableQuantity=ValiableQuantity-:ReturnQuantity,ReturnQuantity=:ReturnQuantity,ExpiryDate=:ExpiryDate where ReceiptID=:ReceiptID and GoodID=:GoodID and ValiableQuantity>=:ReturnQuantity';
                let Stock_update = 'update Stocks set TotalQuantity=TotalQuantity-:ReturnQuantity,ValiableQuantity=ValiableQuantity-:ReturnQuantity where GoodID=:GoodID;';
                let Stock_add = 'insert into Stocks (GoodID,TotalQuantity,ValiableQuantity,CreateTime) values (:GoodID,:Quantity,:Quantity,now());';

                tran.query(ReceiptGood_update, {
                    ReceiptID,
                    GoodID,
                    ReturnQuantity,
                    ExpiryDate
                }, function (err, arrs) {

                    if (err) {
                        return cb(err, null);
                    }

                    if (arrs.affectedRows == 0) {
                        return cb({ message: `${GoodID}商品数量不足！` }, null);
                    }

                    StockChange_add += `(${OperatorID},${GoodID},${ReturnQuantity},'药品退回统计',4,${ReceiptID},0) `;

                    tran.query(Stock_update, { ReturnQuantity, GoodID }, function (err, rows) {

                        if (err) {
                            return cb(err, null);
                        }

                        if (rows.affectedRows == 0) {

                            tran.query(Stock_add, { Quantity, GoodID }, function (err, rows) {

                                if (err) {
                                    return cb(err, null);
                                }

                                return cb(null, 1);

                            });

                        } else {
                            return cb(null, 1);
                        }

                    });

                });


            }, function (err) {

                if (err) {
                    tran.rollback(() => {
                        return callback(err, null);
                    });
                } else {
                    tran.query(StockChange_add, {}, function (err, rows) {

                        if (err) {
                            tran.rollback(() => {
                                return callback(err, null);
                            });
                        }

                        tran.commit(function (err) {

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

    });

};


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
            that._search({
                KeyWord: `%${KeyWord}%`,
                Page,
                Limit,
                StartTime,
                EndTime,
                Status
            }, function (err, db) {

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
module.exports.ReceiptTran = new ReceiptTran();