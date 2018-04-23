var mysql = require("mysql");
const config = require('../config/config');

let pool = mysql.createPool(config.DB_PRO);
let _conn = mysql.createConnection(config.DB_PRO);

/**
 * 当一个连接被创建时发生
 */

pool.on("connection", function(connection) {

    console.log("pool", pool);
    connection.config.queryFormat = function(query, values) {
        if (!values)
            return query;
        return query.replace(/\:(\w+)/g, function(txt, key) {
            if (values.hasOwnProperty(key)) {
                return this.escape(values[key]);
            }

            return txt;
        }.bind(this));
    };

    connection.query('SET SESSION auto_increment_increment=1');
});

var db = {
    query: function(sql, values, callback) {

        /**
         * 执行查询操作
         */
        pool.getConnection(function(err, conn) {

            console.log("conn", conn);

            if (err)
                console.log("POOL ==> " + err);

            conn.query(sql, values, function(err, rows) {
                if (err) {
                    console.log("QUERY  ==> " + err);
                    console.log(values);
                    console.log(sql);
                } else if (callback) {
                    callback(err, rows);
                }
                conn.release();
            });
        });
    },

    end: function(callback) {
        pool.end(callback);
    },

    getTran: function() {
        _conn.config.queryFormat = function(query, values) {
            if (!values)
                return query;
            return query.replace(/\:(\w+)/g, function(txt, key) {
                if (values.hasOwnProperty(key)) {
                    return this.escape(values[key]);
                }

                return txt;
            }.bind(this));
        };

        return _conn;
    },

    /**
     * 以事务的方式进行sjya
     * @param     sql      查询的SQL语句
     * @param  callback 查询成功之后的回调函数
     */
    queryTran: function(sql, callback) {
        _conn.beginTransaction(function(err) {
            if (err) {
                return callback(err);
            }

            _conn.query(sql, function(err, result) {
                if (err) {
                    console.log("POOL ==> " + sql);

                    _conn.rollback(function() {
                        callback(err);
                    })
                }

                _conn.commit(function(err) {
                    if (err) {
                        _conn.rollback(function() {
                            callback(err);
                        });
                    } else {
                        callback(null, result);
                    }
                });
            });
        });
    }
}

function dd(DB_NAME) {
    var pool = mysql.createPool(config.DB_PRO);
    var _conn = mysql.createConnection(config.DB_PRO);

    if (DB_NAME == 'DB_SPIDER') {
        pool = mysql.createPool(config.DB_SPIDER);
        _conn = mysql.createConnection(config.DB_SPIDER);
    }

    pool.on("connection", function(connection) {
        connection.config.queryFormat = function(query, values) {
            if (!values)
                return query;
            return query.replace(/\:(\w+)/g, function(txt, key) {
                if (values.hasOwnProperty(key)) {
                    return this.escape(values[key]);
                }
                return txt;
            }.bind(this));
        };

        connection.query('SET SESSION auto_increment_increment=1');
    });

    this.query = function(sql, values, callback) {

        /**
         * 执行查询操作
         */
        pool.getConnection(function(err, conn) {

            if (err)
                console.log("POOL ==> " + err);

            conn.query(sql, values, function(err, rows) {
                if (err) {
                    console.log("QUERY  ==> " + err);
                } else if (callback) {
                    callback(err, rows);
                }
                conn.release();
            });
        });
    };

    this.end = function(callback) {
        pool.end(callback);
    };

    this.queryTran = function(sql, callback) {
        _conn.beginTransaction(function(err) {
            if (err)
                throw err;

            _conn.query(sql, function(err, result) {
                if (err) {
                    _conn.rollback(function() {
                        throw err;
                    })
                }

                _conn.commit(function(err) {
                    if (err) {
                        _conn.rollback(function() {
                            throw err;
                        });
                    } else {
                        callback(err, result);
                    }
                });
            });
        });
    }
}

module.exports = db;
