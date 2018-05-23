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

    let { KeyWord = '', Page = 0, Limit = 10, StartTime = '2018-01-01', EndTime = '' } = req.body;

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    if (!EndTime) {
        EndTime = moment(new Date()).format('YYYY-MM-DD 23:59:59');
    }

    Stock.search(KeyWord, Page, Limit, StartTime, EndTime, function(err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        const { Quantity, rows } = mem;

        return res.status(200).send({ code: 0, message: "success", Quantity, data: rows });

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

    if (StockGoods.length == 0) {
        return res.send({ code: 2, message: "调整单商品参数不匹配!" });
    };

    const OperatorID = req.session ? req.session.user.ID : 1;

    const StockData = { OperatorID, StockGoods };

    StockTran.revision(StockData, function(err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };


        return res.send({ code: 0, data: mem });

    });
}