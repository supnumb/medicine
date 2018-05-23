/**
 * 会员&员工表
 */
const Base = require('./base');
const moment = require('moment');
const async = require('async');

function Member() {
    var _action = {

        //根据电话号码查找
        _getByTel: "select * from Members where MobilPhone=:MobilPhone;",

        //根据ID进行查找
        _getByID: "select * from Members where ID=:ID;",

        //会员添加
        _add: "insert into Members (Name,PinYin,City,Gender,Address,Remark,MobilPhone,WeiXinCode,IsWeixinFriend,FriendName,BirthYear,Diseases,RelationWithPatient,CreateTime) values (:Name,:PinYin,:City,:Gender,:Address,:Remark,:MobilPhone,WeiXinCode,IsWeixinFriend,FriendName,:BirthYear,:Diseases,:RelationWithPatient,now());",

        //雇员添加
        _addEmployee: "insert into Members (Name,MobilPhone,Password,Flag,CreateTime) values (:Name,:MobilPhone,:Password,1,Now());",

        //会员删除
        _delete: "update Members set Status=0 where ID=:ID;",

        //会员修改
        _update: "update Members set Name=:Name,PinYin=:PinYin,City=:City,Gender=:Gender,Address=:Address,Remark=:Remark,MobilPhone=:MobilPhone,WeiXinCode=:WeiXinCode,IsWeixinFriend=:IsWeixinFriend,FriendName=:FriendName,BirthYear=:BirthYear,Diseases=:Diseases,RelationWithPatient=:RelationWithPatient where ID=:ID;",

        //雇员修改密码
        _alterpass: "update Members set PassWord=:Password where ID=:ID;",

        //会员列表总数
        _memberQuantity: "select count(m.ID) as Quantity from Members m  where m.Flag=:Flag and m.Status=1 and m.CreateTime>=:StartTime and m.CreateTime<=:EndTime and m.MobilPhone like :MobilPhone and concat(m.Name,m.Address) like :KeyWord;",

        //会员列表
        _memberList: "select m.*,count(distinct i.ID) as IntentionQuantity,count(distinct v.ID) as VisitQuantity,count(distinct o.ID) as OrderQuantity from Members m left join Intentions i on m.ID=i.MemberID left join Visits v on m.ID=v.MemberID left join Orders o on m.ID=o.MemberID where m.Flag=:Flag and m.Status=1 and m.CreateTime>=:StartTime and m.CreateTime<=:EndTime and m.MobilPhone like :MobilPhone and concat(m.Name,m.Address) like :KeyWord group by m.ID order by m.UpdateTime desc limit :Page,:Limit;",

        //会员详情
        _memberInfo: "select * from Members where ID=:ID;",

        //雇员列表
        _employeeList: "select * from Members where Flag!=0 and concat(Name,MobilPhone) like :KeyWord order by Flag desc",

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
 * 根据ID查找
 * @param  {Number} ID 雇员ID
 * @param  {Function} callback 回调,返回单条用户信息
 */
Member.prototype.checkByID = function(ID, callback) {

    this._getByID({
        ID
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
Member.prototype.memberList = function(KeyWord, MobilPhone, Page, Limit, OrderBy, StartTime, EndTime, callback) {

    const that = this;

    async.parallel([

        function(cb) {

            that._memberQuantity({
                Flag: 0,
                KeyWord: `%${KeyWord}%`,
                MobilPhone: `%${MobilPhone}%`,
                Page,
                Limit,
                OrderBy: ` m.${OrderBy}`,
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

            that._memberList({
                Flag: 0,
                KeyWord: `%${KeyWord}%`,
                MobilPhone: `%${MobilPhone}%`,
                Page,
                Limit,
                OrderBy: `m.${OrderBy}`,
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

        callback(null, { Quantity, rows });

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

/**
 * 雇员列表
 * @param  {String} KeyWord 关键字
 * @param  {Function} callback 回调
 */
Member.prototype.employeeList = function(KeyWord, callback) {

    this._employeeList({
        KeyWord: `%${KeyWord}%`,
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

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        return callback(null, rows);

    });

};


/**
 * 雇员添加
 * @param  {Object} obj 会员信息
 * @param  {Function} callback 回调
 */
Member.prototype.addEmployee = function(Obj, callback) {

    this._addEmployee(Obj, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};


/**
 * 雇员重置密码
 * @param  {Number} MemberID 会员ID
 * @param  {String} Password 密码
 * @param  {Function} callback 回调
 */
Member.prototype.alterpass = function(ID, Password, callback) {

    this._alterpass({ ID, Password }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};



module.exports = new Member();