/**
 * 意向记录
 */
const Base = require('./base');

function Intention() {
    var _action = {

        //意向记录搜索(MemberID)
        _search: "select MemberID,Goods from Intentions where MemberID=:MemberID;",

        //意向记录列表
        _intentionstList: "select MemberID,Goods from Intentions order by ID desc limit :page,:limit;",

        //意向记录添加
        _add: "insert into Intentions (MemberID,OperatorID,Goods,CreateTime) values (:MemberID,:OperatorID,:Goods,:CreateTime);",

    };

    var base = new Base();

    base.mixin(Intention.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};


/**
 * 意向记录搜索
 * @param  {String} MemberID 会员ID
 */
Intention.prototype.Search = function(MemberID, callback) {

    this._search({
        MemberID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};

/**
 * 意向记录列表
 * @param  {Number} page 第几页
 * @param  {Number} limit 每页几条
 */
Intention.prototype.IntentionstList = function(page, limit, callback) {

    this._intentionstList({
        page,
        limit
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};


/**
 * 添加意向记录
 * @param  {String} MemberID 会员ID
 * @param  {String} OperatorID 操作员ID
 * @param  {String} Goods 意向商品
 * @param  {Date} CreateTime 添加时间
 */
Intention.prototype.add = function(MemberID, OperatorID, Goods, CreateTime, callback) {

    this._add({
        MemberID,
        OperatorID,
        Goods,
        CreateTime
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};

module.exports = new Intention();