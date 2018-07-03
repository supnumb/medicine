/**
 * 库存查询
 */
const Base = require('./base');
const moment = require('moment');
const pool = require('../common/mysql.js');
const async = require('async');

function Stock() {
    var _action = {

        //库存总数
        _stockQuantity: "select count(s.ID) as Quantity from Stocks s left join Goods g on s.GoodID=g.ID left join ReceiptGoods r on s.GoodID=r.GoodID where s.CreateTime>=:StartTime and s.CreateTime<=:EndTime and concat(g.Name,r.ReceiptID) like :KeyWord;",

        //库存查询
        _search: "select AA.GoodID , BB. Name , BB.OfficalName , BB.Dimension , BB.Unit , BB.Manufacturer , BB.DefaultCostPrice , AA.TotalQuantity , AA.ValiableQuantity , AA.SaledQuantity from Stocks as AA INNER join Goods as BB on AA.GoodID = BB.ID where AA.CreateTime>=:StartTime and AA.CreateTime<=:EndTime and BB.Name like :KeyWord order by AA.CreateTime desc limit :Page,:Limit;",

    };

    var base = new Base();

    base.mixin(Stock.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};

function StockTran() {

}


/**
 * 库存查询
 * @param  {String} KeyWord (Name,ID)
 */
Stock.prototype.search = function (KeyWord, Page, Limit, StartTime, EndTime, callback) {

    const that = this;

    async.parallel([

        function (cb) {

            that._stockQuantity({
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

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        return callback(null, { Quantity, rows });

    });
};


/**
 * 调整单录入
 * @param  {Object} Obj
 */
StockTran.prototype.revision = function (Obj, callback) {

    let tran = pool.getTran();

    let { OperatorID, StockGoods } = Obj;

    async.eachSeries(StockGoods, function (item, cb) {

        let { GoodID, DeltaQuantity, Remark } = item;

        let Stock_update = 'update Stocks set TotalQuantity=TotalQuantity-:DeltaQuantity,ValiableQuantity=ValiableQuantity-:DeltaQuantity where GoodID=:GoodID';

        let StockChange = 'insert into StockChangeRecords (OperatorID,GoodID,DeltaQuantity,Remark,Type) values (:OperatorID,:GoodID,:DeltaQuantity,"调整单调整库存",5);';

        tran.query(Stock_update, {
            DeltaQuantity,
            GoodID
        }, function (err, rows) {

            if (err) {
                return cb(err, null);
            }

            if (rows.affectedRows == 0) {
                return cb({ message: `${GoodID}商品库存不足!` }, null);
            }

            tran.query(StockChange, {
                OperatorID,
                GoodID,
                DeltaQuantity
            }, function (err, rows) {

                if (err) {
                    return cb(err, null);
                }

                cb(null, 1);

            });

        });

    }, function (err) {

        if (err) {
            tran.rollback(() => {
                return callback(err, null);
            });
        } else {

            tran.commit(function (err) {

                if (err) {
                    console.log("提交事务失败", err);
                    tran.rollback();
                    return callback(err, null);
                }

                return callback(null, 1);

            });

        }

    });


};

module.exports.Stock = new Stock();

module.exports.StockTran = new StockTran();