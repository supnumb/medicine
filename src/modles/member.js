/**
 *
 */
const Base = require('./base');

/**
 * 会员表
 * @class
 * @constructor
 */
function Member() {
    var _action = {

        _memberList: "select * from Members where Flag=0;",

        _showMemberInfo: "select * from Members where ID=:ID",

        _addMember: "insert into Members (Name,PinYin) values (:Name,:Pinyin);",

        _updMember: "update Members set Remark=:Remark where ID=:ID"
    };

    var base = new Base();

    base.mixin(Member.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};

/**
 * 查询会员列表
 * @param  {Function} callback 回调
 */
Member.prototype.showMemberList = function(callback) {
    this._memberList({
        Flag: 0
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};

let m = new Member();

m.showMemberList(function(err, rows) {
    console.log(err);
    console.log(rows);
})

// module.exports = new Member();