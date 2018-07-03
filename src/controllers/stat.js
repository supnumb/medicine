/**
 * @file <h4>统计接口</h4>
 *
 * 统计相关功能，主要实现功能有：
 *
 * <ol>
 * <li>收银统计</li>order
 * <li>销售员毛利率统计</li>
 * <li>品类统计</li>
 * </ol>
 *
 */

const moment = require('moment');

const { Order } = require('../models/index');


/**
 * 收银统计
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Date}     req.body.StartTime 开始时间
 * @param  {Date}     req.body.EndTime 结束时间
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.cash = (req, res, next) => {

    let { StartTime = '', EndTime = '', action } = req.body;

    console.log(req.body);

    if (!StartTime && !EndTime) {

        const dt = new Date();

        dt.setMonth(dt.getMonth() - 1);

        StartTime = moment(dt).format('YYYY-MM-DD');
        EndTime = moment(new Date()).format('YYYY-MM-DD');
    }

    Order.cash(StartTime, EndTime, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        if (action == 'export') {

        }

        return res.send({ code: 0, message: "收银统计操作成功！", data: mem });

    });
}

/**
 * 销售员毛利率统计
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Date}     req.body.StartTime 开始时间
 * @param  {Date}     req.body.EndTime 结束时间
 */
exports.rate = (req, res, next) => {

    let { StartTime = '', EndTime = '', action } = req.body;

    if (!StartTime && !EndTime) {

        const dt = new Date();

        dt.setMonth(dt.getMonth() - 1);

        StartTime = moment(dt).format('YYYY-MM-DD');
        EndTime = moment(new Date()).format('YYYY-MM-DD');
    }

    Order.rate(StartTime, EndTime, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        if (action == 'export') {

        }

        return res.send({ code: 0, message: "销售员毛利率统计操作成功！", data: mem });

    });
}

/**
 * 销售品类统计
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Date}     req.body.StartTime 开始时间
 * @param  {Date}     req.body.EndTime 结束时间
 */
exports.good = (req, res, next) => {

    console.log(req.body);

    let { StartTime = '', EndTime = '', action } = req.body;

    if (!StartTime && !EndTime) {

        const dt = new Date();

        dt.setMonth(dt.getMonth() - 1);

        StartTime = moment(dt).format('YYYY-MM-DD');
        EndTime = moment(new Date()).format('YYYY-MM-DD');

    }

    Order.good(StartTime, EndTime, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        if (action == 'export') {

        }

        return res.send({ code: 0, message: "销售统计操作成功！", data: mem });

    });
}