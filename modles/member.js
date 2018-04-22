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

        "showMemberList": "select * from Memeber where Flag=0;",

        "showMemberInfo": "select * from Member where ID=:ID",

        "addMember": "insert into Member (Name,PinYin) values (:Name,:Pinyin);",

        "updMember": "update Member set Remark=:Remark where ID=:ID",

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

    var that = this;

    that.showMemberList({
        Flag: 0
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });

    });
};

module.exports = new Member();