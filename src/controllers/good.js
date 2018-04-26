/**
 * @file <h4>药品接口</h4>
 *
 * 药品相关功能接口，主要实现功能有：
 *
 * <ol>
 * <li>药品列表，添加、修改、删除</li>
 * </ol>
 *
 */

const moment = require('moment');
const eventproxy = require('eventproxy');

const { Good } = require('../models/index');


/**
 * 添加药品
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {String}   req.body.name 名称
 * @param  {String}   req.body.pinYin 拼音
 * @param  {String}   req.body.officalName 学名
 * @param  {String}   req.body.dimension 规格尺寸
 * @param  {String}   req.body.formOfDrug 剂型
 * @param  {String}   req.body.unit 单位
 * @param  {String}   req.body.defaultCostPrice 默认进价
 * @param  {String}   req.body.defaultPrice 默认零售价
 * @param  {Tinyint}  req.body.limitPrice 权限价
 * @param  {String}   req.body.competion
 * @param  {String}   req.body.medicare 医保情况
 * @param  {String}   req.body.periodTreatment 疗程
 * @param  {String}   req.body.translation 适应症
 * @param  {String}   req.body.usage 用法用量
 * @param  {String}   req.body.remark 备注
 * @param  {String}   req.body.isForeign 是否进口
 * @param  {String}   req.body.approvalNumber 批准文号
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.addGood = (req, res, next) => {

    let employData = JSON.parse(JSON.stringify(req.body));

    let { name, pinYin, officalName, dimension, formOfDrug, unit, defaultCostPrice, defaultPrice, limitPrice, bidPrice, manufacturer, medicare, periodTreatment, translation, usage, remark, isForeign, approvalNumber } = employData;

    let createTime = new moment(new Date()).format("YYYY-MM-DD");

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!name || !pinYin || !officalName || !dimension || !formOfDrug || !unit || !defaultCostPrice || !defaultPrice || !limitPrice || !bidPrice || !manufacturer || !medicare || !periodTreatment || !translation || !usage || !remark || !isForeign || !approvalNumber) {
        res.status(422);
        return res.send({ code: 2, message: "参数不完整" });
    };

    employData.createTime = createTime;

    Good.addGood(employData, function(err, mem) {

        if (err) {
            ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, data: mem });

    });
}

/**
 * 删除药品
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.deleteGood = (req, res, next) => {

    let { id } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (!id) {
        res.status(422);
        return res.send({ code: 2, message: "药品Id参数不完整" });
    };

    Good.removeGood(id, function(err, mem) {

        if (err) {
            ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, data: mem });

    });
}

/**
 * 修改药品
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {String}   req.body.id 药品id
 * @param  {String}   req.body.name 名称
 * @param  {String}   req.body.pinYin 拼音
 * @param  {String}   req.body.officalName 学名
 * @param  {String}   req.body.dimension 规格尺寸
 * @param  {String}   req.body.formOfDrug 剂型
 * @param  {String}   req.body.unit 单位
 * @param  {String}   req.body.defaultCostPrice 默认进价
 * @param  {String}   req.body.defaultPrice 默认零售价
 * @param  {Tinyint}  req.body.limitPrice 权限价
 * @param  {String}   req.body.competion
 * @param  {String}   req.body.medicare 医保情况
 * @param  {String}   req.body.periodTreatment 疗程
 * @param  {String}   req.body.translation 适应症
 * @param  {String}   req.body.usage 用法用量
 * @param  {String}   req.body.remark 备注
 * @param  {String}   req.body.isForeign 是否进口
 * @param  {String}   req.body.approvalNumber 批准文号
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.updateGood = (req, res, next) => {

    let employData = JSON.parse(JSON.stringify(req.body));

    let { id, name, pinYin, officalName, dimension, formOfDrug, unit, defaultCostPrice, defaultPrice, limitPrice, bidPrice, manufacturer, medicare, periodTreatment, translation, usage, remark, isForeign, approvalNumber } = employData;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });


    if (!id || !name || !pinYin || !officalName || !dimension || !formOfDrug || !unit || !defaultCostPrice || !defaultPrice || !limitPrice || !bidPrice || !manufacturer || !medicare || !periodTreatment || !translation || !usage || !remark || !isForeign || !approvalNumber) {
        res.status(422);
        return res.send({ code: 2, message: "参数不完整" });
    };

    Member.updMember(employData, function(err, mem) {

        if (err) {
            ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, data: mem });

    });
}

/**
 * 药品列表
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.goodList = (req, res, next) => {

    let { page = 0, limit = 10 } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    if (page > 0) {
        page = (page - 1) * limit;
    }

    Good.GoodList(page, limit, function(err, mem) {

        if (err) {
            ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, data: mem });

    });
}

/**
 * 药品列表
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.search = (req, res, next) => {

    let { keyWord = '' } = req.body;

    let ep = new eventproxy();

    ep.fail(function(error) {
        console.error(error);
        return res.status(403).send({ code: -1, message: "系统错误", data: error });
    });

    Good.Search(keyWord, function(err, mem) {

        if (err) {
            ep.emit('error', "数据库操作错误");
        };

        return res.status(200).send({ code: 0, data: mem });

    });
}