/**
 * 药品&员工表
 */
const Base = require('./base');

function Good() {
    var _action = {

        //药品查询(like 字段转义)
        _search: "select * from Goods where Name like :KeyWord;",

        //药品列表
        _goodList: "select * from Goods order by ID desc limit :page,:limit;",

        //药品详情
        _goodInfo: "select * from Goods where ID=:ID;",

        //药品添加
        _add: "insert into Goods (Name,PinYin,OfficalName,Dimension,FormOfDrug,Unit,DefaultCostPrice,DefaultPrice,LimitPrice,BidPrice,Manufacturer,Medicare,PeriodTreatment,Translation,Usage,Remark,IsForeign,ApprovalNumber,CreateTime) values (:Name,:PinYin,:OfficalName,:Dimension,:FormOfDrug,:Unit,:DefaultCostPrice,:DefaultPrice,:LimitPrice,:BidPrice,:Manufacturer,:Medicare,:PeriodTreatment,:Translation,:Usage,:Remark,:IsForeign,:ApprovalNumber:CreateTime);",

        //药品删除(status状态)
        _remove: "update Goods set Status=1 where ID=:ID;",

        //药品修改
        _upd: "update Goods set Name=:Name,PinYin=:PinYin,OfficalName=:OfficalName,Dimension=:Dimension,FormOfDrug=:FormOfDrug,Unit=:Unit,DefaultCostPrice=:DefaultCostPrice,DefaultPrice=:DefaultPrice,LimitPrice=:LimitPrice,BidPrice=:BidPrice,Manufacturer=:Manufacturer,Medicare=:Medicare,PeriodTreatment=:PeriodTreatment,Translation=:Translation,Usage=:Usage,Remark=:Remark,IsForeign=:IsForeign,ApprovalNumber=:ApprovalNumber where ID=:ID;",



    };

    var base = new Base();

    base.mixin(Good.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};

/**
 * 药品查询
 * @param  {String} KeyWord (MobilPhone,Name)
 */
Good.prototype.Search = function(KeyWord, callback) {

    this._search({
        KeyWord: KeyWord
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};

/**
 * 药品列表
 */
Good.prototype.GoodList = function(page, limit, callback) {

    this._GoodList({
        page,
        limit
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};

/**
 * 药品详情
 * @param  {String} ID 药品ID
 */
Good.prototype.GoodInfo = function(ID, callback) {

    this._goodInfo({
        ID: ID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows[0] });
    });
};

/**
 * 药品添加
 * @param  {String} Name 名称
 * @param  {String} PinYin 拼音
 * @param  {String} OfficalName 学名
 * @param  {String} Dimension 规格尺寸
 * @param  {String} FormOfDrug 剂型
 * @param  {String} Unit 单位
 * @param  {String} DefaultCostPrice 默认进价
 * @param  {String} DefaultPrice 默认零售价
 * @param  {Tinyint} LimitPrice 权限价
 * @param  {String} Competion
 * @param  {String} Medicare 医保情况
 * @param  {String} PeriodTreatment 疗程
 * @param  {String} Translation 适应症
 * @param  {String} Usage 用法用量
 * @param  {String} Remark 备注
 * @param  {String} IsForeign 是否进口
 * @param  {String} ApprovalNumber 批准文号
 */
Good.prototype.addGood = function(Name, PinYin, OfficalName, Dimension, FormOfDrug, Unit, DefaultCostPrice, DefaultPrice, LimitPrice, BidPrice, Manufacturer, Medicare, PeriodTreatment, Translation, Usage, Remark, IsForeign, ApprovalNumber, CreateTime, callback) {

    this._add({
        Name,
        PinYin,
        OfficalName,
        Dimension,
        FormOfDrug,
        Unit,
        DefaultCostPrice,
        DefaultPrice,
        LimitPrice,
        BidPrice,
        Manufacturer,
        Medicare,
        PeriodTreatment,
        Translation,
        Usage,
        Remark,
        IsForeign,
        ApprovalNumber,
        CreateTime
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};

/**
 * 药品删除
 * @param  {Int} ID 药品ID
 */
Good.prototype.removeGood = function(ID, callback) {

    this._remove({
        ID: ID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows[0] });
    });
};

/**
 * 药品修改
 * @param  {Int} ID 药品ID
 * @param  {String} Name 名称
 * @param  {String} PinYin 拼音
 * @param  {String} OfficalName 学名
 * @param  {String} Dimension 规格尺寸
 * @param  {String} FormOfDrug 剂型
 * @param  {String} Unit 单位
 * @param  {String} DefaultCostPrice 默认进价
 * @param  {String} DefaultPrice 默认零售价
 * @param  {Tinyint} LimitPrice 权限价
 * @param  {String} Competion
 * @param  {String} Medicare 医保情况
 * @param  {String} PeriodTreatment 疗程
 * @param  {String} Translation 适应症
 * @param  {String} Usage 用法用量
 * @param  {String} Remark 备注
 * @param  {String} IsForeign 是否进口
 * @param  {String} ApprovalNumber 批准文号
 */
Good.prototype.updGood = function(ID, Name, PinYin, OfficalName, Dimension, FormOfDrug, Unit, DefaultCostPrice, DefaultPrice, LimitPrice, BidPrice, Manufacturer, Medicare, PeriodTreatment, Translation, Usage, Remark, IsForeign, ApprovalNumber, callback) {

    this._upd({
        ID: ID,
        Name,
        PinYin,
        OfficalName,
        Dimension,
        FormOfDrug,
        Unit,
        DefaultCostPrice,
        DefaultPrice,
        LimitPrice,
        BidPrice,
        Manufacturer,
        Medicare,
        PeriodTreatment,
        Translation,
        Usage,
        Remark,
        IsForeign,
        ApprovalNumber
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};


module.exports = new Good();