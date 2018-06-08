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

const { Receipt, ReceiptTran } = require('../models/index');

/**
 * 入库单添加、修改
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Number}   req.body.VendorName 供货商名称
 * @param  {String}   req.body.VendorID 供货商ID
 * @param  {String}   req.body.Date 入库时间
 * @param  {Array}    req.body.ReceiptGoods 入库单商品
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.save = (req, res, next) => {

    let { ID, VendorName, VendorID, Date, ReceiptGoods } = req.body;

    console.log(req.body);

    if (!VendorName || !VendorID || !Date || ReceiptGoods.length == 0) {
        return res.status(200).send({ code: 2, message: "VendorName|VendorID|Date|ReceiptGoods参数不匹配！" });
    };

    const ReceiptData = { ID, VendorName, VendorID, Date, ReceiptGoods };

    ReceiptData.OperatorID = req.session ? req.session.user.ID : 1;

    if (ID && ID > 0) {

        ReceiptTran.update(ReceiptData, function (err, mem) {

            if (err && err.message) {
                return res.send({ code: 2, message: err.message });
            }

            if (err) {
                return res.send({ code: 2, message: "数据库出错" });
            };

            return res.send({ code: 0, message: "返回入库单操作成功！", data: mem });

        });

    } else {

        console.log({ ReceiptData });
        ReceiptTran.add(ReceiptData, function (err, mem) {

            if (err && err.message) {
                console.log({ err });

                return res.status(200).send({ code: 2, message: err.message });
            }

            if (err) {
                console.log(err);
                return res.send({ code: 2, message: "数据库出错" });
            };

            return res.status(200).send({ code: 0, message: "添加入库单操作成功！", data: mem });

        });

    }

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
exports.update = (req, res, next) => {

    let { ID = '', VendorName, VendorID, Date, ReceiptGoods } = req.body;

    if (!ID || !VendorName || !VendorID || ReceiptGoods.length == 0) {
        return res.status(200).send({ code: 2, message: "订单ID|VendorName|VendorID|ReceiptGoods参数不匹配！" });
    };

    const ReceiptData = { ID, VendorName, VendorID, Date, ReceiptGoods };

    ReceiptData.OperatorID = req.session ? req.session.user.ID : 1;

    ReceiptTran.update(ReceiptData, function (err, mem) {

        if (err && err.message) {
            return res.send({ code: 2, message: err.message });
        }

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.send({ code: 0, message: "返回入库单操作成功！", data: mem });

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

    console.log(req.body);

    let { KeyWord = '', Page = 0, Limit = 10, StartTime = '2018-01-01', EndTime = '', Status = [0, 1] } = req.body;

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    if (!EndTime) {
        EndTime = moment().add(90, 'd').format('YYYY-MM-DD 23:59:59');
    }

    Receipt.search(KeyWord, Page, Limit, StartTime, EndTime, Status, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        const { Quantity, rows } = mem;
        return res.send({ code: 0, message: '查询入库单列表操作成功！', Quantity, data: rows });
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

    if (!ID) {
        return res.status(200).send({ code: 2, message: "订单ID参数不匹配!" });
    };

    Receipt.receiptInfo(ID, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库操作错误！" });
        };

        const { data, ReceiptGood } = mem;

        return res.send({ code: 0, message: "查询入库单详情操作成功！", data: data[0], ReceiptGoodData: ReceiptGood });

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

    let { ID, Status = 1 } = req.body;

    if (!ID) {
        return res.status(200).send({ code: 2, message: "入库单ID参数不匹配!" });
    };

    Receipt.settle(ID, Status, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错", data: err });
        };

        return res.send({ code: 0, message: "入库单结算操作成功！", data: mem });

    });
}