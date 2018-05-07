/**
 * @file <h4>库存接口</h4>
 *
 * 库存相关功能，主要实现功能有：
 *
 * <ol>
 * <li>库存查询</li>
 * <li>库存调整</li>
 * </ol>
 *
 */

const moment = require('moment');
const eventproxy = require('eventproxy');

const { Stock, StockTran } = require('../models/index');


/**
 * 库存查询
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {String}   req.body.KeyWord 关键字   
 * @param  {Number}   req.body.Page 第几页
 * @param  {Number}   req.body.Limit 每页几条
 * @param  {Date}     req.body.StartTime 开始时间
 * @param  {Date}     req.body.EndTime 结束时间
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.stockList = (req, res, next) => {

    let { KeyWord = '', Page = 0, Limit = 10, StartTime = '', EndTime = '' } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    Stock.search(KeyWord, Page, Limit, StartTime, EndTime, function(err, mem) {

        if (err) {
            ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, data: mem });

    });
}

/**
 * 库存调整
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Array}   req.body.StockGoods 调整库存商品列表
 */
exports.revision = (req, res, next) => {

    let { StockGoods } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (StockGood.length == 0) {
        return res.status(200).send({ code: 2, message: "调整单商品参数不匹配!" });
    };

    const OperatorID = req.session ? req.session.user.ID : 1;

    const StockData = { OperatorID, StockGoods };

    StockTran.revision(StockData, function(err, mem) {

        if (err) {
            ep.emit('error', "数据库操作错误");
        };


        return res.status(200).send({ code: 0, data: mem });

    });
}