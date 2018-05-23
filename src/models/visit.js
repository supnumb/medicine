/**
 * 回访
 */
const Base = require('./base');
const moment = require('moment');
const async = require('async');

function Visit() {
    var _action = {

        //添加
        _add: "insert into Visits (MemberID,OperatorID,Remarks,CreateTime) values (:MemberID,:OperatorID,:Remarks,curdate());",

        //删除
        _delete: "update Visits set Status=0 where ID=:ID;",

        //修改
        _update: "update Visits set Remarks=:Remarks where ID=:ID;",

        //总数
        _visitQuantity: "select count(1) as Quantity from Visits where CreateTime>=:StartTime and CreateTime<=:EndTime and Remarks like :KeyWord;",

        //列表
        _visitList: "select * from Visits where CreateTime>=:StartTime and CreateTime<=:EndTime and Remarks like :KeyWord order by CreateTime desc limit :Page,:Limit;",

        //详情
        _visitInfo: "select * from Visits where ID=:ID;",

        //搜索(MemberID)
        _search: "select v.*,m.Name as OperatorName from Visits v left join Members m on v.OperatorID=m.ID where v.MemberID=:MemberID and v.Status=1 order by v.UpdateTime desc;",

    };

    var base = new Base();

    base.mixin(Visit.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};


/**
 * 回访记录添加
 * @param  {Number} MemberID 会员ID
 * @param  {Number} OperatorID 操作员ID
 * @param  {String} Remarks 备注
 */
Visit.prototype.add = function(MemberID, OperatorID, Remarks, callback) {

    this._add({
        MemberID,
        OperatorID,
        Remarks
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }
        callback(null, rows);
    });
};

/**
 * 回访记录删除
 * @param  {Number} ID 回访ID
 */
Visit.prototype.delete = function(ID, callback) {

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
 * 回访记录修改
 * @param  {Number} ID 回访ID
 * @param  {String} Remarks 备注 
 */
Visit.prototype.update = function(ID, Remarks, callback) {

    this._update({
        ID,
        Remarks
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }
        callback(null, rows);
    });
};

/**
 * 回访记录列表
 * @param  {String} KeyWord 关键字
 * @param  {Number} Page 第几页
 * @param  {Number} Limit 每页显示几条
 */
Visit.prototype.visitList = function(KeyWord, Page, Limit, StartTime, EndTime, callback) {

    const that = this;

    async.parallel([

        function(cb) {

            that._visitQuantity({
                KeyWord: `%${KeyWord}%`,
                Page,
                Limit,
                StartTime,
                EndTime,
            }, function(err, db) {

                if (err) {
                    return cb(err, null);
                }

                cb(null, db[0]);

            });

        },

        function(cb) {

            that._visitList({
                KeyWord: `%${KeyWord}%`,
                Page,
                Limit,
                StartTime,
                EndTime,
            }, function(err, db) {

                if (err) {
                    return cb(err, null);
                }

                cb(null, db);

            });

        }

    ], function(err, result) {

        if (err) {
            return callback(err, null);
        }

        const Quantity = result[0].Quantity;

        const rows = result[1];

        rows.forEach(function(element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        return callback(null, { Quantity, rows });

    });
};

/**
 * 回访记录搜索
 * @param  {Number} MemberID 会员ID
 */
Visit.prototype.search = function(MemberID, callback) {

    this._search({
        MemberID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function(element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('MM-DD HH:mm');

        });

        callback(null, rows);
    });
};




module.exports = new Visit();