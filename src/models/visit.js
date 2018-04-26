/**
 * 回访
 */
const Base = require('./base');

function Visit() {
    var _action = {

        //回访记录搜索(MemberID)
        _search: "select MemberID,Remarks from Visit where MemberID=:MemberID;",

        //回访记录列表
        _visitList: "select MemberID,Remarks from Visit order by ID desc limit :page,:limit;",

    };

    var base = new Base();

    base.mixin(Visit.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};


/**
 * 回访记录搜索
 * @param  {String} MemberID 会员ID
 */
Visit.prototype.Search = function(MemberID, callback) {

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
 * 回访记录列表
 * @param  {Number} page 第几页
 * @param  {Number} limit 每页显示几条
 */
Visit.prototype.VisitList = function(page, limit, callback) {

    this._visitList({
        page,
        limit
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};


module.exports = new Visit();