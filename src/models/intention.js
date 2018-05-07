/**
 * 意向记录
 */
const Base = require('./base');
const moment = require('moment');

function Intention() {
    var _action = {

        //添加
        _add: "insert into Intentions (MemberID,OperatorID,Goods,CreateTime) values (:MemberID,:OperatorID,:Goods,curdate());",

        //删除
        _delete: "update Intentions set Status=0 where ID=:ID;",

        //修改
        _update: "update Intentions set Goods=:Goods,OperatorID=:OperatorID,Status=:Status where ID=:ID;",

        //列表
        _intentionList: "select i.*,m.Name from Intentions i left Member m on i.MemberID=m.ID where i.Goods like :KeyWord order by i.ID desc limit :Page,:Limit;",

        //详情
        _intentionInfo: "select * from Intentions where ID=:ID;",

        //搜索(MemberID)
        _search: "select * from Intentions where MemberID=:MemberID;",

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
Intention.prototype.add = function(MemberID, OperatorID, Goods, callback) {

    this._add({
        MemberID,
        OperatorID,
        Goods
    }, function(err, rows) {
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
Intention.prototype.delete = function(ID, callback) {

    this._delete({
        ID
    }, function(err, rows) {
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
Intention.prototype.update = function(ID, OperatorID, Goods, Status, callback) {

    this._update({
        ID,
        OperatorID,
        Goods,
        Status
    }, function(err, rows) {
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
Intention.prototype.intentionList = function(KeyWord, Page, Limit, callback) {

    this._intentionList({
        Page,
        Limit
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function(element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        callback(null, rows);
    });
};

/**
 * 意向记录搜索
 * @param  {String} MemberID 会员ID
 */
Intention.prototype.search = function(MemberID, callback) {

    this._search({
        MemberID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function(element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        callback(null, rows);
    });
};


module.exports = new Intention();