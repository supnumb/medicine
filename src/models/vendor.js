/**
 * 供应商管理
 */
const Base = require('./base');
const moment = require('moment');

function Vendor() {

    var _action = {

        //添加
        _add: "insert into Vendors (Name,Telephone,Address,Contact,Remark,CreateTime) values (:Name,:Telephone,:Address,:Contact,:Remark,now());",

        //删除
        _delete: "update Vendors set Status=0 where ID=:ID;",

        //修改
        _update: "update Vendors set Name=:Name,Telephone=:Telephone,Address=:Address,Contact=:Contact,Remark=:Remark where ID=:ID;",

        //列表
        _vendorList: "select * from Vendors where Name like :KeyWord group by ID order by ID desc limit :Page,:Limit;",

        //详情
        _vendorInfo: "select * from Vendors where ID=:ID;",

    };

    var base = new Base();

    base.mixin(Vendor.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};


/**
 * 供应商添加
 * @param  {Object} Obj 供应商信息
 */
Vendor.prototype.add = function(Obj, callback) {

    this._add(Obj, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 供应商删除
 * @param  {Number} ID 供应商ID
 */
Vendor.prototype.delete = function(ID, callback) {

    this._delete({
        ID: ID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 供应商修改
 * @param  {Object} Obj 供应商信息
 */
Vendor.prototype.update = function(Obj, callback) {

    this._update(Obj, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 供应商列表
 * @param  {String} KeyWord 关键字
 * @param  {Number} Page 第几页
 * @param  {Number} Limit 每页显示几条
 */
Vendor.prototype.vendorList = function(KeyWord, Page, Limit, callback) {

    this._vendorList({
        KeyWord: `%${KeyWord}%`,
        Page,
        Limit
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
 * 供应商详情
 * @param  {Number} ID 供应商ID
 */
Vendor.prototype.vendorInfo = function(ID, callback) {

    this._vendorInfo({
        ID: ID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        if (rows.length == 1) {
            rows[0].CreateTime = moment(rows[0].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[0].UpdateTime = moment(rows[0].UpdateTime).format('YYYY-MM-DD HH:mm:ss');
        }

        callback(null, rows[0]);
    });
};


module.exports = new Vendor();