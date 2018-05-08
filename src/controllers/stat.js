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
const eventproxy = require('eventproxy');

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

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!StartTime && !EndTime) {

        const dt = new Date();

        console.log(dt.getMonth());

        dt.setMonth(dt.getMonth() - 1);

        StartTime = moment(dt).format('YYYY-MM-DD');
        EndTime = moment(new Date()).format('YYYY-MM-DD');

    }


    Order.cash(StartTime, EndTime, function(err, mem) {

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        if (action == 'export') {

        }

        return res.status(200).send({ code: 0, data: mem });

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

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!StartTime && !EndTime) {

        const dt = new Date();

        console.log(dt.getMonth());

        dt.setMonth(dt.getMonth() - 1);

        StartTime = moment(dt).format('YYYY-MM-DD');
        EndTime = moment(new Date()).format('YYYY-MM-DD');

    }

    Order.rate(StartTime, EndTime, function(err, mem) {

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        if (action == 'export') {

        }

        return res.status(200).send({ code: 0, data: mem });

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

    let { StartTime = '', EndTime = '', action } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!StartTime && !EndTime) {

        const dt = new Date();

        console.log(dt.getMonth());

        dt.setMonth(dt.getMonth() - 1);

        StartTime = moment(dt).format('YYYY-MM-DD');
        EndTime = moment(new Date()).format('YYYY-MM-DD');

    }

    Order.good(StartTime, EndTime, function(err, mem) {

        if (err) {
            return ep.emit('error', "数据库操作错误");
        };

        if (action == 'export') {

        }

        return res.status(200).send({ code: 0, data: mem });

    });
}