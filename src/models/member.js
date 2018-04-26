/**
 * 会员&员工表
 */
const Base = require('./base');

function Member() {
    var _action = {

        //根据电话号码查找
        _getByTel: "select * from Members where MobilPhone=:MobilPhone;",

        //会员查询(like 字段转义)
        _search: "select Name,Gender,MobilPhone,City from Members where Flag=:Flag and concat(MobilPhone,Name) like :KeyWord;",

        //会员列表
        _memberList: "select m.Name,m.MobilPhone,ifnull(i.Goods,'') Goods,count(v.ID) as visitCount,count(o.ID) as orderCount from Members m left join Intentions i on m.ID=i.MemberID left join Visits v on m.ID=v.MemberID left join Orders o on m.ID=o.MemberID where m.Flag=:Flag order by ID desc limit :page,:limit;",

        //会员详情
        _memberInfo: "select * from Members where ID=:ID;",

        //会员添加
        _add: "insert into Members (Name,PinYin,Telephone,City,Gender,Address,Remark,MobilPhone,WeiXinCode,IsWeixinFriend,FriendName,BirthYear,Diseases) values (:Name,:PinYin,:Telephone,:City,:Gender,:Address,:Remark,:MobilPhone,:WeiXinCode,:IsWeixinFriend,:FriendName,:BirthYear,:Diseases);",

        //会员删除(status状态)
        _remove: "update Members set Status=1 where ID=:ID;",

        //会员修改
        _upd: "update Members set Name=:Name,PinYin=:PinYin,Telephone=:Telephone,City=:City,Gender=:Gender,Address=:Address,Remark=:Remark,MobilPhone=:MobilPhone,WeiXinCode=:WeiXinCode,IsWeixinFriend=:IsWeixinFriend,FriendName=:FriendName,BirthYear=:BirthYear,Diseases=:Diseases where ID=:ID;",



    };

    var base = new Base();

    base.mixin(Member.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};

/**
 * 根据电话号码查找
 * @param  {String} MobilPhone 电话号码
 */
Member.prototype.Check = function(MobilPhone, callback) {

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
 * 会员查询
 * @param  {String} KeyWord (MobilPhone,Name)
 */
Member.prototype.Search = function(KeyWord, callback) {

    this._search({
        Flag: 0,
        KeyWord: KeyWord
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};

/**
 * 会员列表
 */
Member.prototype.MemberList = function(page, limit, callback) {

    this._memberList({
        Flag: 0,
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
 * 会员详情
 * @param  {Int} ID 会员ID
 */
Member.prototype.MemberInfo = function(ID, callback) {

    this._memberInfo({
        ID: ID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows[0] });
    });
};

/**
 * 会员添加
 * @param  {String} Name 姓名
 * @param  {String} PinYin 姓名拼音
 * @param  {String} Telephone 座机
 * @param  {String} City 城市
 * @param  {Int} Gender 行别
 * @param  {String} Address 地址
 * @param  {String} Remark 备注
 * @param  {String} MobilPhone 移动电话
 * @param  {String} WeiXinCode 微信号
 * @param  {Tinyint} IsWeixinFriend 是否微信好友
 * @param  {String} FriendNamek 是谁的好友
 * @param  {String} BirthYear 出生年代
 * @param  {String} Diseases 疾病
 */
Member.prototype.addMember = function(Name, PinYin, Telephone, City, Gender, Address, Remark, MobilPhone, WeiXinCode, IsWeixinFriend, FriendName, BirthYear, Diseases, callback) {

    this._add({
        Name: Name,
        PinYin: PinYin,
        Telephone: Telephone,
        City: City,
        Gender: Gender,
        Address: Address,
        Remark: Remark,
        MobilPhone: MobilPhone,
        WeiXinCode: WeiXinCode,
        IsWeixinFriend: IsWeixinFriend,
        FriendName: FriendName,
        BirthYear: BirthYear,
        Diseases: Diseases
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};

/**
 * 会员删除
 * @param  {Int} ID 会员ID
 */
Member.prototype.removeMember = function(ID, callback) {

    this._remove({
        ID: ID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows[0] });
    });
};


/**
 * 会员修改
 * @param  {Int} ID 会员ID
 * @param  {String} Name 姓名
 * @param  {String} PinYin 姓名拼音
 * @param  {String} Telephone 座机
 * @param  {String} City 城市
 * @param  {Int} Gender 行别
 * @param  {String} Address 地址
 * @param  {String} Remark 备注
 * @param  {String} MobilPhone 移动电话
 * @param  {String} WeiXinCode 微信号
 * @param  {Tinyint} IsWeixinFriend 是否微信好友
 * @param  {String} FriendNamek 是谁的好友
 * @param  {String} BirthYear 出生年代
 * @param  {String} Diseases 疾病
 */
Member.prototype.updMember = function(ID, Name, PinYin, Telephone, City, Gender, Address, Remark, MobilPhone, WeiXinCode, IsWeixinFriend, FriendName, BirthYear, Diseases, callback) {

    this._upd({
        ID: ID,
        Name: Name,
        PinYin: PinYin,
        Telephone: Telephone,
        City: City,
        Gender: Gender,
        Address: Address,
        Remark: Remark,
        MobilPhone: MobilPhone,
        WeiXinCode: WeiXinCode,
        IsWeixinFriend: IsWeixinFriend,
        FriendName: FriendName,
        BirthYear: BirthYear,
        Diseases: Diseases
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};



module.exports = new Member();