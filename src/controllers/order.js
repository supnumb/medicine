/**
 * @file <h4>销售订单接口</h4>
 *
 * 订单相关功能，主要实现功能有：
 *
 * <ol>
 * <li>录入销售订单</li>
 * <li>修改销售订单</li>
 * <li>销售订单退回</li>
 * <li>会员订单列表</li>
 * <li>会员订单详情</li>
 * </ol>
 *
 */

const moment = require('moment');
let page = require("phantom");
let config = require('../../config');

const { Order, OrderTran } = require('../models/index');

let isJson = (str) => {
    try {
        if (typeof JSON.parse(str) == "object") {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}

/**
 * 编辑销售订单
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Number}   req.body.ID 订单ID,修改时使用
 * @param  {Number}   req.body.MemberID 会员ID
 * @param  {String}   req.body.Address 地址
 * @param  {String}   req.body.Connact 联系人
 * @param  {String}   req.body.Telephone 联系方式
 * @param  {Number}   req.body.TotalAmount 订单总金额
 * @param  {Number}   req.body.ReceiptAmount 实收金额
 * @param  {Number}   req.body.PayStyle 支付方式
 * @param  {String}   req.body.DeliveryCompany  快递公司
 * @param  {Number}   req.body.DeliveryFee 快递费
 * @param  {String}   req.body.DeliverCode 快递单号
 * @param  {Number}   req.body.DeliverReceiptFee 代收费用
 * @param  {String}   req.body.Remark 备注
 * @param  {Date}     req.body.Date 入库登记时间
 * @param  {Array}    req.body.Goods 订单商品
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.edit = (req, res, next) => {

    //TODO:兼容错误，默认操作为当前登录用户
    let { user } = req.session;

    let { ID, MemberID, OperatorID = user.ID, EmployeeID, Address, MemberName: Connact, Telephone, ReceiptAmount = 0, PayStyle = 3, DeliveryCompany = '', DeliveryFee = 0, DeliverCode = '', DeliverReceiptFee = 0, DeliveryReceive = 0, DeliveryInsure = 0, Remark = '', Goods } = req.body;

    if (!MemberID || !EmployeeID || !Address || !Connact || !Telephone || !ReceiptAmount || !PayStyle || Goods.length == 0) {
        return res.send({ code: 2, message: "参数不完整" });
    };

    let { TotalAmount } = Order.calc(Goods);

    const orderData = { ID, MemberID, EmployeeID, OperatorID, Address, Connact, Telephone, TotalAmount, ReceiptAmount, PayStyle, DeliveryCompany, DeliveryFee, DeliverCode, DeliverReceiptFee, DeliveryInsure, Remark, Date: new Date(), Goods, DeliveryReceive };

    // console.log(orderData);

    // OrderTran.edit(orderData, function (err, mem) {
    Order.edit(orderData, function (err, mem) {
        if (err) {
            console.error(err);
            return res.send({ code: 2, message: "数据库操作有误！", data: err });
        };

        console.log({ mem });

        return res.send({ code: 0, message: "编辑销售订单操作成功！", data: { ID: mem.ID } });
    });
}

/**
 * 退回销售订单
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Number}   req.body.ID 订单ID
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.cancel = (req, res, next) => {

    let { ID = '' } = req.body;

    if (!ID) {
        return res.send({ code: 2, message: "订单ID参数不匹配!" });
    };

    OrderTran.cancel(ID, function (err, mem) {

        if (err) {
            console.log("err", err);
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.status(200).send({
            code: 0,
            message: "退回销售订单操作成功！",
            data: mem
        });

    });

}

/**
 * 订单列表
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {String}   req.body.KeyWord 关键字
 * @param  {Number}   req.body.Page 第几页
 * @param  {Number}   req.body.Limit 每页几条
 * @param  {Date}     req.body.StartTime 开始时间
 * @param  {Date}     req.body.EndTime 结束时间
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.orderList = (req, res, next) => {

    // console.log(req.body);

    let { KeyWord = '', Page = 0, Limit = 10, StartTime = '2018-01-01', EndTime = '' } = req.body;

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    if (!EndTime) {
        EndTime = moment(new Date()).format('YYYY-MM-DD 23:59:59');
    }

    Order.orderList(KeyWord, Page, Limit, StartTime, EndTime, function (err, mem) {
        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        let { Quantity, rows } = mem;

        return res.send({ code: 0, message: "查询订单列表操作成功！", Quantity, data: rows });
    });
}

/**
 * 订单详情
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.params.ID 订单ID
 */
exports.orderInfo = (req, res, next) => {

    let { ID } = req.body;

    if (!ID) {
        res.status(422);
        return res.status(200).send({ code: 2, message: "订单ID参数不匹配!" });
    };

    Order.orderInfo(ID, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        const { rows, goods } = mem;

        return res.send({ code: 0, message: "查询订单详情操作成功！", data: rows[0], goodsData: goods });

    });
}

/**
 * 打印快递单，返回Pdf文件地址  
 * @param {Object} req 请求对象
 * @param {Object} res 响应对象
 * @param {Function} next 管道操作
 */
exports.printOrder = (req, res, next) => {
    let { orderid } = req.body;

    if (orderid > 0) {
        page.create().then(function (ph) {
            ph.createPage().then(function (pg) {

                pg.open(`http://127.0.0.1:3000/order/view_ticket?orderid=${orderid}`).then(function (status) {

                    if (status !== "success") {
                        return res.send({ code: -1, message: "打印过程出错，请重试" })
                    } else {

                        pg.property('viewportSize', { width: 120, height: 500 });

                        let deliverTicketPdf = `${config.TempFileRoot}/${orderid}.pdf`;
                        let url = `${config.UrlTemFile}/${orderid}.pdf`;

                        pg.property("plainText").then(function (jsonText) {

                            let isJ = isJson(jsonText);
                            if (isJ) {
                                let json = JSON.parse(jsonText);
                                return res.send(json);
                            } else {
                                pg.render(deliverTicketPdf).then(function () {
                                    console.log('Page Rendered');
                                    ph.exit();
                                    return res.send({ code: 0, message: "开始打印...", data: { path: url } });
                                })
                            }
                        })
                    }
                })
            })
        })
    } else {
        return res.send({ code: 2, message: "请指定打印的订单ID" });
    }
};


/**
 * 打印订单
 * 
 * @param {Object} req 请求对象 
 * @param {Object} res 响应
 * @param {Function} next 管道
 */
exports.printDeliver = (req, res, next) => {
    let { orderid } = req.body;

    if (orderid > 0) {
        page.create().then(function (ph) {

            ph.createPage().then(function (pg) {
                pg.open(`http://127.0.0.1:3000/order/view_deliver_ticket?orderid=${orderid}`).then(function (status) {
                    if (status !== "success") {
                        return res.send({ code: -1, message: "打印过程出错，请重试" })
                    } else {

                        pg.property('viewportSize', { width: 120, height: 500 });

                        let deliverTicketPdf = `${config.TempFileRoot}/${orderid}.pdf`;
                        let url = `${config.UrlTemFile}/${orderid}.pdf`;

                        pg.property("plainText").then(function (jsonText) {

                            let isJ = isJson(jsonText);
                            if (isJ) {
                                let json = JSON.parse(jsonText);
                                return res.send(json);
                            } else {

                                pg.render(deliverTicketPdf).then(function () {
                                    console.log('Page Rendered');
                                    ph.exit();
                                    return res.send({ code: 0, message: "开始打印...", data: { path: url } });
                                })
                            }
                        })

                    }
                })
            })
        }).catch(err => {
            console.log(err);
            ph.exit();
        })
    } else {
        return res.send({ code: 2, message: "请指定打印的订单ID" });
    }
};