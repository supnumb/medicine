/**
 * @file <h4>会员接口</h4>
 *
 * 会员相关功能接口，主要实现功能有：
 *
 * <ol>
 * <li>管理员登录</li>
 * <li>管理员退出</li>
 * <li>会员管理，添加、修改、删除</li>
 * <li>会员列表，电话、姓名、意向单数量、回访记录数量、成单数量</li>
 * <li>会员查询，按名称、地址、电话查询</li>
 * <li>会员详情，会员信息、回访记录、意向记录、订单记录</li>
 * <li>会员跟踪，回访记录添加、回访记录列表、回访记录搜索</li>
 * <li>会员购买意向，会员购买意向添加，意向列表</li>
 * </ol>
 *
 */

const config = require('../../config');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const async = require('async');
const moment = require('moment');

const { Member, Intention, Order, Visit } = require('../models/index');

exports.checkUser = (req, res, next) => {

    let refer = req.originalUrl;

    if (/^\/api\//.test(refer)) {
        if (req.session.user) {
            next();
        } else {
            return res.status(422).send({ code: 99, message: "该操作需要您先进行登录！" });
        }
    } else {
        res.redirect('/employee_signin/' + encodeURIComponent(refer));
    }
}

/**
 * 管理员登录
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {String}   req.body.login_name 登录手机号
 * @param  {String}   req.body.password 登录密码
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.signIn = (req, res, next) => {
    let { login_name, password } = req.body;

<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
    console.log({ login_name, password });

    let ep = new eventproxy();
    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

=======
>>>>>>> afccea332d9f42d6733c56292ac340e16ee6aee0
    if (!login_name || !password) {
        return res.send({ code: 2, message: "电话、密码参数不完整" });
    };

    Member.check(login_name, function (err, mem) {
        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        if (mem) {
            bcrypt.compare(password, mem.Password, function (err, result) {

                if (err) {
                    return res.send({ code: 2, message: "密码比对出错" });
                }

                if (result) {
                    req.session.user = mem;
                    return res.send({ code: 0, message: "登录成功" });
                } else {
                    return res.send({ code: 2, message: "电话或密码不正确" });
                }
            });
        } else {

            return res.send({ code: 2, message: `${login_name}没有注册。` });
        }
    });
}

/**
 * 管理员退出
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.signOut = (req, res, next) => {
    req.session.user = null;
    //auth.clearSession(res);
    res.send({ code: 0, message: "成功退出" });
}

/**
 * 添加会员
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.body.ID 会员ID
 * @param  {String}   req.body.Name 姓名
 * @param  {String}   req.body.PinYin 姓名拼音
 * @param  {String}   req.body.City 城市
 * @param  {Nember}   req.body.Gender 行别  1是男，2是女
 * @param  {String}   req.body.Address 地址
 * @param  {String}   req.body.Remark 备注
 * @param  {String}   req.body.MobilPhone 移动电话
 * @param  {String}   req.body.WeiXinCode 微信号
 * @param  {Tinyint}  req.body.IsWeixinFriend 是否微信好友
 * @param  {String}   req.body.FriendNamek 是谁的好友
 * @param  {String}   req.body.BirthYear 出生年代
 * @param  {String}   req.body.Diseases 疾病
 * @param  {String}   req.body.RelationWithPatient 与患者关系
 */
exports.save = (req, res, next) => {

    console.log(req.body);

    const {
        ID,
        Name,
        PinYin = '',
        City,
        Gender,
        Address = '',
        Remark = '',
        MobilPhone,
        WeiXinCode = '',
        IsWeixinFriend = '',
        FriendName = '',
        BirthYear = '',
        Diseases = '',
        RelationWithPatient = ''
    } = req.body;

<<<<<<< HEAD
    let ep = new eventproxy();

    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });
=======
>>>>>>> afccea332d9f42d6733c56292ac340e16ee6aee0

    if (!Name || !City || !Gender || !MobilPhone) {
        return res.send({ code: 2, message: "Name|City|Gender|MobilPhone参数不完整" });
    };

    let memberData = {
        ID,
        Name,
        PinYin,
        City,
        Gender,
        Address,
        Remark,
        MobilPhone,
        WeiXinCode,
        IsWeixinFriend,
        FriendName,
        BirthYear,
        Diseases,
        RelationWithPatient
    };

    if (ID && ID > 0) {

        Member.updateMember(memberData, function (err, mem) {

            if (err) {
                return res.send({ code: -1, message: "数据库连接失败！" });
            };

            if (mem.affectedRows == 0) {
                return res.status(200).send({ code: 2, message: "未找到对应信息！", data: mem });
            }

            return res.status(200).send({ code: 0, message: "修改会员信息操作成功！", data: mem });

        });

    } else {

        Member.addMember(memberData, function (err, mem) {

            if (err) {
                return res.send({ code: 2, message: "数据库出错" });
            };

            return res.status(200).send({ code: 0, message: "添加会员信息操作成功！", data: mem });

        });

    }

}

/**
 * 删除会员
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Number}   req.body.MemberID 会员ID
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.deleteMember = (req, res, next) => {

    let { MemberID } = req.body;

<<<<<<< HEAD
    let ep = new eventproxy();

    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

=======
>>>>>>> afccea332d9f42d6733c56292ac340e16ee6aee0
    if (!MemberID) {
        return res.send({ code: 2, message: "会员Id参数不完整" });
    };

    Member.deleteMember(MemberID, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.status(200).send({ code: 0, message: "删除会员信息操作成功！", data: mem });

    });
}

/**
 * 会员列表
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.body.KeyWord 关键字
 * @param  {String}   req.body.MobilPhone 移动电话
 * @param  {Number}   req.body.Page 第几页
 * @param  {Number}   req.body.Limit 每页几条
 * @param  {String}   req.body.OrderBy 排序规则，默认ID倒序
 */
exports.memberList = (req, res, next) => {

<<<<<<< HEAD
    let { KeyWord = '', MobilPhone = '', Page = 0, Limit = 10, OrderBy = 'ID', StartTime = '2018-01-01', EndTime = '' } = req.body;

    let ep = new eventproxy();

    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });
=======
    let { KeyWord = '', MobilPhone = '', Page = 0, Limit = 10, OrderBy = 'UpdateTime', StartTime = '2018-01-01', EndTime = '' } = req.body;
>>>>>>> afccea332d9f42d6733c56292ac340e16ee6aee0

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    if (MobilPhone) {
        if (!validator.isMobilePhone(MobilPhone, 'zh-CN')) {
            MobilPhone = "";
        }
    }

    if (!EndTime) {
        EndTime = moment(new Date()).format('YYYY-MM-DD 23:59:59');
    }

    Member.memberList(KeyWord, MobilPhone, Page, Limit, OrderBy, StartTime, EndTime, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        const { Quantity, rows } = mem;

        console.log(mem);

        return res.status(200).send({ code: 0, message: "查询会员列表操作成功！", Quantity, data: rows });

    });
}

/**
 * 会员详情
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.params.MemberID 会员ID
 */
exports.memberInfo = (req, res, next) => {

    let {
        MemberID = ''
    } = req.params;

<<<<<<< HEAD
    let ep = new eventproxy();

    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

=======
>>>>>>> afccea332d9f42d6733c56292ac340e16ee6aee0
    if (!MemberID) {
        return res.send({ code: 2, message: "参数不匹配" });
    };

    async.parallel([

        function (cb) {

            Member.memberInfo(MemberID, function (err, mem) {

                if (err) {
                    return cb(err, null);
                };

                cb(null, mem);

            });

        },

        function (cb) {

            Intention.search(MemberID, function (err, mem) {

                if (err) {
                    return cb(err, null);
                };

                cb(null, mem);

            });

        },

        function (cb) {

            Visit.search(MemberID, function (err, mem) {

                if (err) {
                    return cb(err, null);
                };

                cb(null, mem);

            });

        },

        function (cb) {

            Order.search(MemberID, function (err, mem) {

                if (err) {
                    return cb(err, null);
                };

                cb(null, mem);

            });

        }

    ], function (err, result) {

        if (err) {
            return res.send({ code: -1, message: "系统错误", data: error });
        };

        if (!result[0]) {
            return res.status(200).send({ code: 2, message: "未找到对应信息！" });
        }


        console.log(result[1]);
        console.log(result[2]);

        return res.status(200).send({ code: 0, message: "查询会员详情操作成功！", data: result[0], intentionData: result[1], visitData: result[2], orderData: result[3] });
    });

}

/**
 * 添加回访记录
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.body.MemberID 会员ID
 * @param  {String}   req.body.Remarks 备注
 */
exports.addVisit = (req, res, next) => {

    console.log(req.body);

<<<<<<< Updated upstream
    let { MemberID, Remarks } = req.body;
=======
    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });
>>>>>>> Stashed changes

    if (!MemberID || !Remarks) {
        res.status(422);
        return res.send({ code: 2, message: "参数不完整" });
    };

    const OperatorID = req.session ?
        req.session.user.ID :
        1;

    Visit.add(MemberID, OperatorID, Remarks, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.status(200).send({ code: 0, message: "添加回访记录操作成功！", data: mem });

    });
}

/**
 * 回访记录列表/搜索
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.body.KeyWord 关键字
 * @param  {Number}   req.body.Page 第几页
 * @param  {Number}   req.body.Limit 每页几条
 */
exports.visitList = (req, res, next) => {

    let { KeyWord = '', Page = 0, Limit = 10, StartTime = '2018-01-01', EndTime = '' } = req.body;

<<<<<<< Updated upstream
=======
    let ep = new eventproxy();

    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

>>>>>>> Stashed changes
    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    if (!EndTime) {
        EndTime = moment(new Date()).format('YYYY-MM-DD 23:59:59');
    }

    Visit.visitList(KeyWord, Page, Limit, StartTime, EndTime, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        const { Quantity, rows } = mem;

        return res.send({ code: 0, message: "查询回访记录列表操作成功！", Quantity, data: rows });

    });
}

/**
 * 意向记录添加
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.body.MemberID 会员ID
 * @param  {String}   req.body.Goods 意向商品
 */
exports.addIntention = (req, res, next) => {
    console.log(req.body);

    let { MemberID, Goods } = req.body;

    if (!MemberID || !Goods) {
        return res.send({ code: 2, message: "会员Id、意向商品参数不完整" });
    };

    const OperatorID = req.session ?
        req.session.user.ID :
        1;

    Intention.add(MemberID, OperatorID, Goods, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.status(200).send({ code: 0, message: "意向记录添加操作成功！", data: mem });

    });
}


/**
 * 意向记录修改
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.body.ID 意向单ID
 * @param  {String}   req.body.Goods 意向商品
 * @param  {Number}   req.body.Status 意向单状态
 */
exports.updateIntention = (req, res, next) => {

    let { ID, Goods, Status = 5 } = req.body;

    if (!ID || !Goods) {
        res.status(422);
        return res.send({ code: 2, message: "意向单Id、意向商品参数不完整" });
    };

    const OperatorID = req.session ? req.session.user.ID : 1;

    Intention.update(ID, OperatorID, Goods, Status, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.send({ code: 0, message: "意向记录修改操作成功！", data: mem });

    });
}

/**
 * 意向记录列表
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.body.KeyWord 关键字
 * @param  {Number}   req.body.Page 第几页
 * @param  {Number}   req.body.Limit 每页几条
 */
exports.intentionList = (req, res, next) => {

    let { KeyWord = '', Page = 0, Limit = 10, StartTime = '2018-01-01', EndTime = '' } = req.body;

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    if (!EndTime) {
        EndTime = moment(new Date()).format('YYYY-MM-DD 23:59:59');
    }

    Intention.intentionList(KeyWord, Page, Limit, StartTime, EndTime, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库操作错误" });
        };

        const { Quantity, rows } = mem;

        return res.status(200).send({ code: 0, message: "查询意向记录列表操作成功！", Quantity, data: rows });

    });
}