/**
 * 库存查询
 */
const Base = require('./base');
const moment = require('moment');
const pool = require('../common/mysql.js');
const async = require('async');

function Stock() {
    var _action = {

        //库存查询
        _search: "select s.*,g.Name,r,ReceiptID from Stocks s left join Goods g on s.GoodID=g.ID left join ReceiptGoods r on s.GoodID=r.GoodID where concat(g.Name,r.ReceiptID) like :KeyWord;",

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
Stock.prototype.search = function(KeyWord, callback) {

    this._search({
        KeyWord: `%${KeyWord}%`
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};


/**
 * 调整单录入
 * @param  {Object} Obj
 */
StockTran.prototype.revision = function(Obj, callback) {

    let tran = pool.getTran();

    let { OperatorID, StockGoods } = Obj;

    async.eachSeries(StockGoods, function(item, cb) {

        let { GoodID, DeltaQuantity, Remark } = item;

        let Stock_update = 'update Stocks set TotalQuantity=TotalQuantity-:DeltaQuantity,ValiableQuantity=:ValiableQuantity-:DeltaQuantity where GoodID=:GoodID';

        let StockChange = 'insert into StockChangerecords (OperatorID,GoodID,DeltaQuantity,Remark,Type) values (:OperatorID,:GoodID,:DeltaQuantity,"调整单调整库存",5);';

        pool.query(Stock_update, {
            GoodID
        }, function(err, rows) {

            if (err) {
                return cb(err, null);
            }

            if (rows.affectedRows == 0) {
                return cb({ message: `${GoodID}商品库存不足!` }, null);
            }

            pool.query(StockChange, {
                OperatorID,
                GoodID,
                DeltaQuantity
            }, function(err, rows) {

                if (err) {
                    return cb(err, null);
                }

                cb(null, 1);

            });

        });

    }, function(err) {

        if (err) {
            tran.rollback(() => {
                return callback(err, null);
            });
        } else {

            tran.commit(function(err) {

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