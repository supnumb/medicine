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

const { Receipt } = require('../models/index');

/**
 * 入库单\退货单：添加、修改
 * 
 *
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Number}   req.body.VendorName 供货商名称
 * @param  {String}   req.body.VendorID 供货商ID
 * @param  {String}   req.body.Date 入库时间
 * @param  {Array}    req.body.ReceiptGoods 入库单商品
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.save = (req, res, next) => {
    let { ID, VendorName, VendorID, Date, IsReturn, ReceiptGoods, Remark = "" } = req.body;

    if (!VendorName || !VendorID || !Date || ReceiptGoods.length == 0) {
        return res.status(200).send({ code: 2, message: "VendorName|VendorID|Date|ReceiptGoods参数不匹配！" });
    };

    const ReceiptData = { ID, VendorName, VendorID, Date: moment(Date).format("YYYY-MM-DD"), ReceiptGoods, Remark, Flag: IsReturn ? 1 : 0 };

    let { user } = req.session;

    ReceiptData.OperatorID = user.ID;

    if (ID && ID > 0) {
        Receipt.receiptInfo(ID, (err, rows) => {
            if (err) {
                console.error(err);
                return res.send({ code: 2, message: "数据库出错" });
            }

            //判断入库单能不能修改
            if (rows) {
                let { data: [receiptInfo] } = rows;

                if (receiptInfo.Status == 1) {
                    return res.send({ code: 3, message: "进货单已经结算，不能修改" })
                }

                // console.log({ ReceiptData });

                Receipt.update(ReceiptData, function (err, mem) {
                    if (err) {
                        return res.send({ code: 3, message: "数据库出错", data: err });
                    };

                    return res.send({ code: 0, message: "返回入库单操作成功！", data: mem });
                });

            } else {
                return res.send({ code: 2, message: "订单已经被删除，请重新查询" });
            }
        })

    } else {
        Receipt.add(ReceiptData, function (err, mem) {

            if (err) {
                console.log(err);
                return res.send({ code: 2, message: "数据库出错", data: err });
            };

            return res.status(200).send({ code: 0, message: "添加入库单操作成功！", data: mem });
        });
    }
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

    // console.log(req.body);

    let { KeyWord = '', Page = 0, Limit = 10, StartTime = '2018-01-01', EndTime = '', Status = [0, 1] } = req.body;

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

        return res.send({ code: 0, message: "入库单【结算|取消结算】操作成功！", data: mem });

    });
}