/**
 * 会员&员工表
 */
const Base = require('./base');
const moment = require('moment');

function Member() {
    var _action = {

        //根据电话号码查找
        _getByTel: "select * from Members where MobilPhone=:MobilPhone;",

        //会员添加
        _add: "insert into Members (Name,PinYin,Telephone,City,Gender,Address,Remark,MobilPhone,WeiXinCode,IsWeixinFriend,FriendName,BirthYear,Diseases,RelationWithPatient,CreateTime) values (:Name,:PinYin,:Telephone,:City,:Gender,:Address,:Remark,:MobilPhone,WeiXinCode,IsWeixinFriend,FriendName,:BirthYear,:Diseases,:RelationWithPatient,now());",

        //会员删除
        _delete: "update Members set Status=0 where ID=:ID;",

        //会员修改
        _update: "update Members set Name=:Name,PinYin=:PinYin,Telephone=:Telephone,City=:City,Gender=:Gender,Address=:Address,Remark=:Remark,MobilPhone=:MobilPhone,WeiXinCode=:WeiXinCode,IsWeixinFriend=:IsWeixinFriend,FriendName=:FriendName,BirthYear=:BirthYear,Diseases=:Diseases,RelationWithPatient=:RelationWithPatient where ID=:ID;",

        //会员列表
        _memberList: "select m.*,count(i.ID) as IntentionQuantity,count(v.ID) as VisitQuantity,count(o.ID) as OrderQuantity from Members m left join Intentions i on m.ID=i.MemberID left join Visits v on m.ID=v.MemberID left join Orders o on m.ID=o.MemberID where m.Flag=:Flag and m.Status=1 and m.MobilPhone like :MobilPhone and concat(m.Name,m.Address) like :KeyWord group by m.ID order by :OrderBy desc limit :Page,:Limit;",

        //会员详情
        _memberInfo: "select * from Members where ID=:ID;",

    };

    var base = new Base();

    base.mixin(Member.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};

/**
 * 根据电话号码查找
 * @param  {String} MobilPhone 电话号码
 * @param  {Function} callback 回调,返回单条用户信息
 */
Member.prototype.check = function(MobilPhone, callback) {

    this._getByTel({
        MobilPhone: MobilPhone
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }
        callback(null, rows[0]);
    });
};

/**
 * 会员添加
 * @param  {Object} obj 会员信息
 * @param  {Function} callback 回调
 */
Member.prototype.addMember = function(Obj, callback) {

    this._add(Obj, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 会员删除
 * @param  {Int} ID 会员ID
 * @param  {Function} callback 回调
 */
Member.prototype.deleteMember = function(ID, callback) {

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
 * 会员修改
 * @param  {Object} Obj 会员信息
 * @param  {Function} callback 回调
 */
Member.prototype.updateMember = function(Obj, callback) {

    this._update(Obj, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 会员列表
 * @param  {String} KeyWord 关键字
 * @param  {String} MobilPhone 移动电话
 * @param  {Number} Page 第几页
 * @param  {Number} Limit 每页显示几条
 * @param  {Function} callback 回调
 */
Member.prototype.memberList = function(KeyWord, MobilPhone, Page, Limit, OrderBy, callback) {

    this._memberList({
        Flag: 0,
        KeyWord: `%${KeyWord}%`,
        MobilPhone: `%${MobilPhone}%`,
        Page,
        Limit,
        OrderBy: ` m.${OrderBy}`,
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function(element, index) {

            if (element.Gender == 1) {
                rows[index].Gender = "男";
            } else {
                rows[index].Gender = "女";
            }

            if (element.IsWeixinFriend == 1) {
                rows[index].IsWeixinFriend = "是";
            } else {
                rows[index].IsWeixinFriend = "否";
            }

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        callback(null, rows);

    });
};

/**
 * 会员详情
 * @param  {Number} ID 会员ID
 * @param  {Function} callback 回调
 */
Member.prototype.memberInfo = function(ID, callback) {

    this._memberInfo({
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


module.exports = new Member();