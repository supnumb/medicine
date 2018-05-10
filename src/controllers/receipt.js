/**
 * @file <h4>入库单接口</h4>
 *
 * 入库单相关功能，主要实现功能有：
 *
 * <ol>
 * <li>入库单录入</li>
 * <li>入库单修改、退回</li>
 * <li>入库单查询、列表</li>
 * <li>入库单详情</li>
 * </ol>
 *
 */

const moment = require('moment');
const eventproxy = require('eventproxy');

const { Receipt, ReceiptTran } = require('../models/index');

/**
 * 添加入库单
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Number}   req.body.VendorName 供货商名称
 * @param  {String}   req.body.VendorID 供货商ID
 * @param  {String}   req.body.Date 入库时间
 * @param  {Array}    req.body.ReceiptGoods 入库单商品
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.add = (req, res, next) => {

    let { VendorName, VendorID, Date, ReceiptGoods } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!VendorName || !VendorID || !Date || ReceiptGoods.length == 0) {
        return res.status(200).send({ code: 2, message: "VendorName|VendorID|Date|ReceiptGoods参数不匹配！" });
    };

    const ReceiptData = { VendorName, VendorID, Date, ReceiptGoods };

    ReceiptData.OperatorID = req.session ? req.session.user.ID : 1;

    ReceiptTran.add(ReceiptData, function(err, mem) {

        if (err && err.message) {
            return res.status(200).send({ code: 2, message: err.message });
        }

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, message: "success", data: mem });

    });
}

/**
 * 退回入库单
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Number}   req.body.ID 订单ID
 * @param  {Number}   req.body.VendorName 供货商名称
 * @param  {String}   req.body.VendorID 供货商ID
 * @param  {String}   req.body.Date 入库时间
 * @param  {Array}    req.body.ReceiptGoods 入库单商品
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.cancel = (req, res, next) => {

    let { ID = '', VendorName, VendorID, Date, ReceiptGoods } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!ID || !VendorName || !VendorID || ReceiptGoods.length == 0) {
        res.status(422);
        return res.status(200).send({ code: 2, message: "订单ID|VendorName|VendorID|ReceiptGoods参数不匹配！" });
    };

    const ReceiptData = { ID, VendorName, VendorID, Date, ReceiptGoods };

    ReceiptData.OperatorID = req.session ? req.session.user.ID : 1;

    ReceiptTran.cancel(ReceiptData, function(err, mem) {

        if (err && err.message) {
            return res.status(200).send({ code: 2, message: err.message });
        }

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, data: mem });

    });

}

/**
 * 入库单列表
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {String}   req.body.KeyWord 关键字   
 * @param  {Number}   req.body.Page 第几页
 * @param  {Number}   req.body.Limit 每页几条
 * @param  {Date}     req.body.StartTime 开始时间
 * @param  {Date}     req.body.EndTime 结束时间
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.receiptList = (req, res, next) => {

    let { KeyWord = '', Page = 0, Limit = 10, StartTime = '2018-01-01', EndTime = '' } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    if (!EndTime) {
        EndTime = moment(new Date()).format('YYYY-MM-DD 23:59:59');
    }

    Receipt.search(KeyWord, Page, Limit, StartTime, EndTime, function(err, mem) {

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        const { Quantity, rows } = mem;

        return res.status(200).send({ code: 0, message: 'success', Quantity, data: rows });

    });
}

/**
 * 入库单详情
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.body.ID 订单ID
 */
exports.receiptInfo = (req, res, next) => {

    let { ID } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!ID) {
        return res.status(200).send({ code: 2, message: "订单ID参数不匹配!" });
    };

    Receipt.receiptInfo(ID, function(err, mem) {

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        const { data, ReceiptGood } = mem;

        return res.status(200).send({ code: 0, data: data[0], ReceiptGoodData: ReceiptGood });

    });
}


/**
 * 入库单结算
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.body.ID 结算ID
 */
exports.settle = (req, res, next) => {

    let { ID } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!ID) {
        return res.status(200).send({ code: 2, message: "入库单ID参数不匹配!" });
    };

    Receipt.settle(ID, function(err, mem) {

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, message: "success", data: mem });

    });
}