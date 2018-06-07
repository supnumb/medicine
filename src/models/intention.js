/**
 * 意向记录
 */
const Base = require('./base');
const moment = require('moment');
const async = require('async');

function Intention() {
    var _action = {

        //添加
        _add: "insert into Intentions (MemberID,OperatorID,Goods,OtherGoods,Tags,CreateTime) values (:MemberID,:OperatorID,:Goods,:OtherGoods,:Tags,curdate());",

        //删除
        _delete: "update Intentions set Status=-1 where ID=:ID;",

        //修改
        _update: "update Intentions set Goods=:Goods,OperatorID=:OperatorID,Status=:Status,Tags=:Tags where ID=:ID;",

        //总数
        _intentionQuantity: "select count(1) as Quantity from Intentions i where i.CreateTime>=:StartTime and i.CreateTime<=:EndTime and i.Goods like :KeyWord;",

        //列表
        _intentionList: "select AA.*,BB.Name,CC.Name as OperatorName from Intentions AS AA inner join Members AS BB on AA.MemberID=BB.ID inner join Members as CC on cc.ID=AA.OperatorID where i.CreateTime>=:StartTime and i.CreateTime<=:EndTime and i.Goods like :KeyWord order by i.ID desc limit :Page,:Limit;",

        //详情
        _intentionInfo: "select * from Intentions where ID=:ID;",

        //搜索(MemberID)
        _search: "select i.*,m.Name as OperatorName from Intentions i left join Members m on i.OperatorID=m.ID where i.MemberID=:MemberID order by i.UpdateTime desc;",

    };

    var base = new Base();

    base.mixin(Intention.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};

/**
 * 添加意向记录
 * @param  {String} MemberID 会员ID
 * @param  {String} OperatorID 操作员ID
 * @param  {String} Goods 意向商品
 */
Intention.prototype.add = function (MemberID, OperatorID, Goods, OtherGoods, Tags, callback) {

    this._add({
        MemberID,
        OperatorID,
        Goods: Goods.join(','),
        Tags,
        OtherGoods
    }, function (err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 删除意向记录
 * @param  {String} ID 会员ID
 */
Intention.prototype.delete = function (ID, callback) {

    this._delete({
        ID
    }, function (err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 修改意向记录
 * @param  {String} ID 会员ID
 * @param  {String} Goods 意向商品
 */
Intention.prototype.update = function (ID, OperatorID, Goods, Status, Tags, callback) {

    this._update({
        ID,
        OperatorID,
        Goods,
        Status,
        Tags
    }, function (err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 意向记录列表
 * @param  {String} KeyWord 关键字
 * @param  {Number} Page 第几页
 * @param  {Number} Limit 每页几条
 */
Intention.prototype.intentionList = function (KeyWord, Page, Limit, StartTime, EndTime, callback) {

    const that = this;

    async.parallel([

        function (cb) {

            that._intentionQuantity({
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

            that._intentionList({
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

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        return callback(null, { Quantity, rows });

    });
};

/**
 * 意向记录搜索
 * @param  {String} MemberID 会员ID
 */
Intention.prototype.search = function (MemberID, callback) {

    this._search({
        MemberID
    }, function (err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function (element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('MM-DD HH:mm');

        });

        callback(null, rows);
    });
};


module.exports = new Intention();