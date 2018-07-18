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
// const eventproxy = require('eventproxy');
const config = require('../../config');
var fs = require('fs');
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

    Stock.search(KeyWord, Page, Limit, StartTime, EndTime, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        const { Quantity, rows } = mem;

        return res.status(200).send({ code: 0, message: "查询库存列表操作成功！", Quantity, data: rows });

    });
}

/**
 * 库存当前的状态
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
exports.stocks = (req, res, next) => {

    let { keyword = '', action = "" } = req.body;

    Stock.stocks(keyword, function (err, rows) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        if (action == 'export') {
            let csvStr = `商品id,商品名称,通用名称,规格,单位,生产厂家,总进货,已销售,可用库存,进价平均,库存金额\r\n`;

            rows.forEach(item => {
                csvStr += `${item.GoodID},${item.Name},${item.OfficalName},${item.Dimension},${item.Unit},${item.Manufacturer},${item.TotalQuantity},${item.SaledQuantity},${item.ValiableQuantity},${item.DefaultCostPrice},${item.ValiableQuantity * item.DefaultCostPrice}\r\n`;
            })

            let filename = `stock_${moment().format("YYYY-MM-DD")}.csv`;
            let urlfile = `${config.UrlTemFile}/${filename}`;

            console.log(csvStr);

            fs.writeFile(config.TempFileRoot + "/" + filename, csvStr, function (err) {
                console.log(err);
            });

            return res.send({ code: 0, message: "查询库存列表操作成功！", data: rows, url: urlfile, filename });
        } else {
            return res.status(200).send({ code: 0, message: "查询库存列表操作成功！", data: rows });
        }
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

    StockTran.revision(StockData, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.send({ code: 0, message: "库存调整操作成功！", data: mem });
    });
}