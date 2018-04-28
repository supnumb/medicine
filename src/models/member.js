/**
 * 会员&员工表
 */
const Base = require('./base');

function Member() {
    var _action = {

        //根据电话号码查找
        _getByTel: "select * from Members where MobilPhone=:MobilPhone;",

        //会员查询
        _search: "select Name,Gender,MobilPhone,City from Members where Flag=:Flag and concat(MobilPhone,Name) like :KeyWord;",

        //会员列表
        _memberList: "select m.Name,m.MobilPhone,m.City,m.Gender,m.Address,m.Remark,ifnull(i.Goods,'') Goods,count(v.ID) as VisitQuantity,count(o.ID) as orderQuantity from Members m left join Intentions i on m.ID=i.MemberID left join Visits v on m.ID=v.MemberID left join Orders o on m.ID=o.MemberID where m.Flag=:Flag and m.Status=1 group by m.ID order by m.ID desc limit :page,:limit;",

        //会员详情
        _memberInfo: "select * from Members where ID=:ID;",

        //会员添加
        _add: "insert into Members (Name,PinYin,Telephone,City,Gender,Address,Remark,MobilPhone,BirthYear,Diseases,RelationWithPatient) values (:Name,:PinYin,:Telephone,:City,:Gender,:Address,:Remark,:MobilPhone,:BirthYear,:Diseases,:RelationWithPatient);",

        //会员删除
        _remove: "update Members set Status=0 where ID=:ID;",

        //会员修改
        _update: "update Members set Name=:Name,PinYin=:PinYin,Telephone=:Telephone,City=:City,Gender=:Gender,Address=:Address,Remark=:Remark,MobilPhone=:MobilPhone,BirthYear=:BirthYear,Diseases=:Diseases where ID=:ID;",



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
 * @param  {Function} callback 回调,返回多条用户信息
 */
Member.prototype.Search = function(KeyWord, callback) {

    this._search({
        Flag: 0,
        KeyWord: `%${KeyWord}%`
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 会员列表
 * @param  {Number} page 第几页
 * @param  {Number} limit 每页显示几条
 * @param  {Function} callback 回调
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

        rows.forEach(function(element, index) {

            if (element.Gender == 1) {
                rows[index].Gender = "男";
            } else {
                rows[index].Gender = "女";
            }

        });

        callback(null, rows);
    });
};

/**
 * 会员详情
 * @param  {Number} ID 会员ID
 * @param  {Function} callback 回调
 */
Member.prototype.MemberInfo = function(ID, callback) {

    this._memberInfo({
        ID: ID
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
Member.prototype.addMember = function(obj, callback) {

    this._add(obj, function(err, rows) {
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
Member.prototype.removeMember = function(ID, callback) {

    this._remove({
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
 * @param  {Object} obj 会员信息
 * @param  {Function} callback 回调
 */
Member.prototype.updMember = function(obj, callback) {

    this._update(obj, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};


module.exports = new Member();