/**
 * @file Mysql数据库操作基类
 * mix数据库操作到各自的实体类
 * @author supnumb@163.com
 * @module module/base
 */
var pool = require('../common/mysql');

function Base() {

};

Base.prototype.mixin = function(host, obj) {
    for (var key in obj) {
        host[key] = function(param, callback) {
            console.log(this.toString());
            pool.query(this.toString(), param, function(err, result) {
                if (callback && typeof callback == 'function')
                    callback(err, result);
            });
        }.bind(obj[key]);
    }
};

/**
 * 模型类的基类
 */
module.exports = Base;
