/**
 * 订单
 */
const Base = require('./base');
const moment = require('moment');

function Order() {
    var _action = {

        //订单记录搜索(MemberID)
        _search: "select * from Orders where MemberID=:MemberID;",

        //订单记录列表
        _intentionstList: "select MemberID,Goods from Intentions order by ID desc limit :page,:limit;",

        //订单记录添加
        _add: "insert into Intentions (MemberID,OperatorID,Goods,CreateTime) values (:MemberID,:OperatorID,:Goods,:CreateTime);",

    };

    var base = new Base();

    base.mixin(Order.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};


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
 * @param  {Number} Page 第几页
 * @param  {Number} Limit 每页几条
 */
Order.prototype.orderList = function(Page, Limit, callback) {

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
 * 添加订单记录
 * @param  {String} MemberID 会员ID
 * @param  {String} OperatorID 操作员ID
 * @param  {String} Goods 意向商品
 * @param  {Date} CreateTime 添加时间
 */
Order.prototype.add = function(MemberID, OperatorID, Goods, CreateTime, callback) {

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

module.exports = new Order();