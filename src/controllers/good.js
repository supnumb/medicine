/**
 * @file <h4>药品接口</h4>
 *
 * 药品相关功能接口，主要实现功能有：
 *
 * <ol>
 * <li>药品添加、修改、删除</li>
 * </ol>
 *
 */

const moment = require('moment');

const { Good } = require('../models/index');


/**
 * 添加药品
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {String}   req.body.Name 名称
 * @param  {String}   req.body.PinYin 拼音
 * @param  {String}   req.body.OfficalName 学名
 * @param  {String}   req.body.Dimension 规格尺寸
 * @param  {String}   req.body.FormOfDrug 剂型
 * @param  {String}   req.body.Unit 单位
 * @param  {Number}   req.body.DefaultCostPrice 默认进价
 * @param  {Number}   req.body.DefaultPrice 默认零售价
 * @param  {Number}   req.body.LimitPrice 权限价
 * @param  {Number}   req.body.BidPrice  中标价
 * @param  {String}   req.body.Manufacturer 生产厂家
 * @param  {String}   req.body.Cmpetion
 * @param  {String}   req.body.Medicare 医保情况
 * @param  {String}   req.body.PeriodTreatment 疗程
 * @param  {String}   req.body.Translation 适应症
 * @param  {String}   req.body.Usage 用法用量
 * @param  {String}   req.body.Remark 备注
 * @param  {String}   req.body.IsForeign 是否进口
 * @param  {String}   req.body.ApprovalNumber 批准文号
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.addGood = (req, res, next) => {

    let { ID, Name, PinYin = '', OfficalName, Dimension, FormOfDrug, Unit, DefaultCostPrice, DefaultPrice, LimitPrice = 0, BidPrice = 0, Manufacturer, Competion, Medicare = '', PeriodTreatment, Translation, UseWay, Remark = '', IsForeign = 0, ApprovalNumber } = req.body;

    if (!Name || !OfficalName || !Dimension || !FormOfDrug || !Unit || !DefaultCostPrice || !DefaultPrice || !Manufacturer || !Competion || !PeriodTreatment || !Translation || !UseWay || !ApprovalNumber) {
        return res.send({ code: 2, message: "参数不完整" });
    };

    const goodData = { ID, Name, PinYin, OfficalName, Dimension, FormOfDrug, Unit, DefaultCostPrice, DefaultPrice, LimitPrice, BidPrice, Manufacturer, Competion, Medicare, PeriodTreatment, Translation, UseWay, Remark, IsForeign, ApprovalNumber };


    if (ID && ID > 0) {

        Good.update(goodData, function (err, mem) {

            if (err) {
                return res.send({ code: 2, message: "数据库出错" });
            };

            return res.status(200).send({ code: 0, message: "修改药品操作成功！", data: mem });

        });

    } else {

        Good.add(goodData, function (err, mem) {

            if (err) {
                return res.send({ code: 2, message: "数据库出错" });
            };

            return res.status(200).send({ code: 0, message: "添加药品操作成功！", data: mem });

        });

    }

}

/**
 * 删除药品
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {Number}   req.body.ID 药品ID
 */
exports.deleteGood = (req, res, next) => {

    let { ID } = req.body;

    if (!ID) {
        return res.send({ code: 2, message: "药品Id参数不完整" });
    };

    Good.delete(ID, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        if (mem.affectedRows == 0) {
            return res.status(200).send({ code: 2, message: "未找到对应信息！" });
        }

        return res.status(200).send({ code: 0, message: "删除药品操作成功！", data: mem });

    });
}

/**
 * 修改药品
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {String}   req.body.ID 药品ID
 * @param  {String}   req.body.Name 名称
 * @param  {String}   req.body.PinYin 拼音
 * @param  {String}   req.body.OfficalName 学名
 * @param  {String}   req.body.Dimension 规格尺寸
 * @param  {String}   req.body.FormOfDrug 剂型
 * @param  {String}   req.body.Unit 单位
 * @param  {Number}   req.body.DefaultCostPrice 默认进价
 * @param  {Number}   req.body.DefaultPrice 默认零售价
 * @param  {Number}   req.body.LimitPrice 权限价
 * @param  {Number}   req.body.BidPrice  中标价
 * @param  {String}   req.body.Manufacturer 生产厂家
 * @param  {String}   req.body.Cmpetion
 * @param  {String}   req.body.Medicare 医保情况
 * @param  {String}   req.body.PeriodTreatment 疗程
 * @param  {String}   req.body.Translation 适应症
 * @param  {String}   req.body.Usage 用法用量
 * @param  {String}   req.body.Remark 备注
 * @param  {String}   req.body.IsForeign 是否进口
 * @param  {String}   req.body.ApprovalNumber 批准文号
 * @param  {Function} next 管道操作，传递到下一步
 */
exports.updateGood = (req, res, next) => {

    let { ID, Name, PinYin = '', OfficalName, Dimension, FormOfDrug, Unit, DefaultCostPrice, DefaultPrice, LimitPrice = 0, BidPrice = 0, Manufacturer, Competion, Medicare = '', PeriodTreatment, Translation, UseWay, Remark = '', IsForeign = 0, ApprovalNumber } = req.body;

    if (!ID || !Name || !OfficalName || !Dimension || !FormOfDrug || !Unit || !DefaultCostPrice || !DefaultPrice || !Manufacturer || !Competion || !PeriodTreatment || !Translation || !UseWay || !ApprovalNumber) {
        return res.send({ code: 2, message: "参数不完整" });
    };

    const goodData = { ID, Name, PinYin, OfficalName, Dimension, FormOfDrug, Unit, DefaultCostPrice, DefaultPrice, LimitPrice, BidPrice, Manufacturer, Competion, Medicare, PeriodTreatment, Translation, UseWay, Remark, IsForeign, ApprovalNumber };

    Good.update(goodData, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.status(200).send({ code: 0, message: "修改药品操作成功！", data: mem });

    });
}

/**
 * 药品列表
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.body.KeyWord 关键字
 * @param  {Number}   req.body.Page 第几页
 * @param  {Number}   req.body.Limit 每页几条
 * @param  {Date}     req.body.StartTime 开始时间
 * @param  {Date}     req.body.EndTime 结束时间
 */
exports.goodList = (req, res, next) => {

    console.log(req.body);


    let { KeyWord = '', Page = 0, Limit = 10, StartTime = '2018-01-01', EndTime = '' } = req.body;

    if (Page > 0) {
        Page = (Page - 1) * Limit;
    }

    if (!EndTime) {
        EndTime = moment(new Date()).format('YYYY-MM-DD 23:59:59');
    }

    Good.goodList(KeyWord, Page, Limit, StartTime, EndTime, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        const { Quantity, rows } = mem;

        return res.send({ code: 0, message: "查询药品列表操作成功！", Quantity, data: rows });

    });
}

/**
 * 药品详情
 * @param  {Object}   req  http 请求对象
 * @param  {Object}   res  http 响应对象
 * @param  {Function} next 管道操作，传递到下一步
 * @param  {String}   req.params.GoodID 药品ID
 */
exports.goodInfo = (req, res, next) => {

    let { GoodID = '' } = req.params;

    if (!GoodID) {
        return res.send({ code: 2, message: "参数不匹配" });
    };

    Good.goodInfo(GoodID, function (err, mem) {

        if (err) {
            return res.send({ code: 2, message: "数据库出错" });
        };

        return res.status(200).send({ code: 0, message: "查询药品详情操作成功！", data: mem });

    });
}