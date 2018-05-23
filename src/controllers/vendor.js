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
        Address = '',
        Contact,
        Remark = ''
    } = req.body;

    if (!Name || !Telephone || !Contact) {
        return res.send({ code: 2, message: "Name|Telephone|Contact参数不匹配！" });
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
        Vendor.update(vendorData, function(err, mem) {

            if (err) {
                return res.send({ code: 2, message: "数据库出错" });
            };

            return res.status(200).send({ code: 0, message: "修改供货商操作成功！", data: mem });

        });

    } else {

        Vendor.add(vendorData, function(err, mem) {

            if (err) {
                return res.send({ code: 2, message: "数据库出错" });
            };

            return res.status(200).send({ code: 0, message: "添加供货商操作成功！", data: mem });

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

    if (!ID) {
        return res.status(200).send({ code: 2, message: "ID参数不匹配！" });
    };

    Vendor.delete(ID, function(err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        if (mem.affectedRows == 0) {
            return res.status(200).send({ code: 2, message: "未找到对应信息！" });
        }

        return res.status(200).send({ code: 0, message: "删除供货商操作成功！", data: mem });

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

    let {
        KeyWord = '',
            Page = 0,
            Limit = 10
    } = req.body;

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    Vendor.vendorList(KeyWord, Page, Limit, function(err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        const { Quantity, rows } = mem;

        return res.send({ code: 0, message: '查询供货商列表操作成功', Quantity, data: rows });
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

    if (!VendorID) {
        return res.status(200).send({ code: 2, message: "ID参数不匹配！" });
    };

    Vendor.vendorInfo(VendorID, function(err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.send({ code: 0, message: "查询供货商详情操作成功！", data: mem });

    });
}