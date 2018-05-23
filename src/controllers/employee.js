/**
 * @file <h4>雇员接口</h4>
 *
 * 会员相关功能接口，主要实现功能有：
 *
 * <ol>
 * <li>雇员列表</li>
 * <li>雇员添加</li>
 * <li>登录雇员详细信息</li>
 * <li>公司雇员修改密码</li>
 * <li>管理员重置雇员密码</li>
 * </ol>
 *
 */

const config = require('../../config');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const moment = require('moment');

const { Member } = require('../models/index');

/**
 * 雇员列表
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.body.KeyWord
 */
exports.search = (req, res, next) => {

    const { KeyWord = '' } = req.body;

    Member.employeeList(KeyWord, function(err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.send({ code: 0, message: "查询雇员列表操作成功！", data: mem });

    });
}


/**
 * 雇员添加
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.body.Name 姓名
 * @param  {String}   req.body.MobilPhone 移动电话
 * @param  {String}   req.body.Password 密码
 */
exports.addEmployee = (req, res, next) => {

    const { Name, MobilPhone, Password } = req.body;

    // let ep = new eventproxy();

    // ep.fail(function(error) {
    //     console.error(error);
    //     return res.status(403).send({ code: -1, message: "系统错误", data: error });
    // });

    if (!Name || !MobilPhone || !Password) {
        return res.send({ code: 2, message: "Name|MobilPhone|Password参数不完整" });
    };

    const Flag = req.session ? req.session.user.Flag : 2;

    if (Flag != 2) {
        return res.send({ code: 2, message: "权限不足！" })
    }

    let memberData = { Name, MobilPhone, Password };

    let passhash = bcrypt.hashSync(Password, bcrypt.genSaltSync(10));

    memberData.Password = passhash;

    Member.addEmployee(memberData, function(err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.status(200).send({ code: 0, message: "添加雇员操作成功！", data: mem });

    });
}

/**
 * 雇员详情
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.params.MemberID 会员ID
 */
exports.profile = (req, res, next) => {

    let { MemberID = '' } = req.body;

    if (!MemberID) {
        MemberID = req.session.user.ID;
    };

    Member.memberInfo(MemberID, function(err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.status(200).send({ code: 0, message: "查看雇员详情操作成功！", data: mem });

    });


}

/**
 *  雇员修改密码
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.body.MemberID 雇员ID
 * @param  {String}   req.body.Password 新密码
 */
exports.alterpass = (req, res, next) => {

    const { MemberID, OldPass, NewPass } = req.body;

    if (!MemberID && !OldPass) {
        return res.send({ code: 2, message: "雇员ID|原密码参数不完整" });
    }

    if (!MemberID) {
        MemberID = req.session ? req.session.user.ID : 1;
    }

    if (!NewPass) {
        return res.send({ code: 2, message: "新密码参数不完整" });
    }

    let passhash = bcrypt.hashSync(NewPass, bcrypt.genSaltSync(10));

    Member.checkByID(MemberID, function(err, mem) {
        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        if (mem) {

            if (OldPass) {

                bcrypt.compare(OldPass, mem.Password, function(err, result) {

                    if (err) {
                        return res.send({ code: 2, message: "数据库出错" });
                    }

                    if (result) {

                        Member.alterpass(MemberID, passhash, function(err, data) {

                            if (err) {
                                return res.send({ code: 2, message: "数据库出错" });
                            }

                            return res.status(200).send({ code: 0, message: "雇员修改密码操作成功！" });

                        });
                    } else {
                        return res.send({ code: 2, message: "原密码输入有误" });
                    }
                });

            } else {

                Member.alterpass(MemberID, passhash, function(err, data) {

                    if (err) {
                        return res.send({ code: 2, message: "数据库出错" });
                    }

                    return res.send({ code: 0, message: "雇员修改密码操作成功！" });

                });
            }

        } else {
            return res.send({ code: 2, message: "未找到对应信息" });
        }

    });
}