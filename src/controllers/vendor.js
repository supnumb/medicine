/**
 * @file <h4>供应商接口</h4>
 *
 * 供应商相关功能接口，主要实现功能有：
 *
 * <ol>
 * <li>供应商添加、修改、删除</li>
 * <li>供应商列表</li>
 * <li>供应商详情</li>
 * </ol>
 *
 */

const moment = require('moment');
const eventproxy = require('eventproxy');

const { Vendor } = require('../models/index');

/**
 * 添加供应商
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {String}   req.body.Name 名称
 * @param  {String}   req.body.Telephone 联系方式
 * @param  {String}   req.body.Address 地址
 * @param  {String}   req.body.Contact 联系人
 * @param  {String}   req.body.Remark 备注
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.addVendor = (req, res, next) => {

    let {
        ID,
        Name,
        Telephone,
        Address,
        Contact,
        Remark = ''
    } = req.body;

    let ep = new eventproxy();

    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!Name || !Telephone || !Address || !Contact) {
        return res.status(200).send({ code: 2, message: "Name|Telephone|Address|Contact参数不匹配！" });
    };

    const vendorData = {
        ID,
        Name,
        Telephone,
        Address,
        Contact,
        Remark
    };

    if (ID && ID > 0) {
        Vendor.update(vendorData, function (err, mem) {

            if (err) {
                return ep.emit('error', "数据库操作错误");
            };

            return res.status(200).send({ code: 0, data: mem });

        });

    } else {

        Vendor.add(vendorData, function (err, mem) {

            if (err) {
                return ep.emit('error', "数据库操作错误");
            };

            return res.status(200).send({ code: 0, message: "success", data: mem });

        });
    }

}

/**
 * 删除供应商
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.body.ID 供应商ID
 */
exports.deleteVendor = (req, res, next) => {

    let { ID } = req.body;

    let ep = new eventproxy();

    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!ID) {
        return res.status(200).send({ code: 2, message: "ID参数不匹配！" });
    };

    Vendor.delete(ID, function (err, mem) {

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        if (mem.affectedRows == 0) {
            return res.status(200).send({ code: 2, message: "未找到对应信息！" });
        }

        return res.status(200).send({ code: 0, message: "success", data: mem });

    });
}

/**
 * 供应商列表
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.body.KeyWord 关键字
 * @param  {Number}   req.body.Page 第几页
 * @param  {Number}   req.body.Limit 每页几条
 */
exports.vendorList = (req, res, next) => {

    console.log(req.body);

    let {
        KeyWord = '',
        Page = 0,
        Limit = 10
    } = req.body;

    let ep = new eventproxy();

    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    Vendor.vendorList(KeyWord, Page, Limit, function (err, mem) {

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        const { Quantity, rows } = mem;

        return res.status(200).send({ code: 0, message: 'success', Quantity, data: rows });
    });
}

/**
 * 供应商详情
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.params.VendorID 供应商ID
 */
exports.vendorInfo = (req, res, next) => {

    let {
        VendorID = ''
    } = req.params;

    let ep = new eventproxy();

    ep.fail(function (error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!VendorID) {
        return res.status(200).send({ code: 2, message: "ID参数不匹配！" });
    };

    Vendor.vendorInfo(VendorID, function (err, mem) {

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, data: mem });

    });
}