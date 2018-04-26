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
        _update: "update Goods set Name=:Name,PinYin=:PinYin,OfficalName=:OfficalName,Dimension=:Dimension,FormOfDrug=:FormOfDrug,Unit=:Unit,DefaultCostPrice=:DefaultCostPrice,DefaultPrice=:DefaultPrice,LimitPrice=:LimitPrice,BidPrice=:BidPrice,Manufacturer=:Manufacturer,Medicare=:Medicare,PeriodTreatment=:PeriodTreatment,Translation=:Translation,Usage=:Usage,Remark=:Remark,IsForeign=:IsForeign,ApprovalNumber=:ApprovalNumber where ID=:ID;",



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
 * @param  {Number} page 第几页
 * @param  {Number} limit 每页显示几条
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
 * @param  {Object} obj 药品信息
 */
Good.prototype.addGood = function(obj, callback) {

    this._add({
        Name: obj.name,
        PinYin: obj.pinYin,
        OfficalName: obj.officalName,
        Dimension: obj.dimension,
        FormOfDrug: obj.formOfDrug,
        Unit: obj.unit,
        DefaultCostPrice: obj.defaultCostPrice,
        DefaultPrice: obj.defaultCostPrice,
        LimitPrice: obj.limitPrice,
        BidPrice: obj.bidPrice,
        Manufacturer: obj.manufacturer,
        Medicare: obk.medicare,
        PeriodTreatment: obj.periodTreatment,
        Translation: obj.translation,
        Usage: obj.usage,
        Remark: obj.remark,
        IsForeign: obj.isForeign,
        ApprovalNumber: obj.approvalNumber,
        CreateTime: obj.createTime
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
 * @param  {Object} obj 药品信息
 */
Good.prototype.updateGood = function(obj, callback) {

    this._update({
        ID: obj.id,
        Name: obj.name,
        PinYin: obj.pinyin,
        OfficalName: obj.officalName,
        Dimension: obj.dimension,
        FormOfDrug: obj.formOfDrug,
        Unit: obj.unit,
        DefaultCostPrice: obj.defaultCostPrice,
        DefaultPrice: obj.defaultCostPrice,
        LimitPrice: obj.limitPrice,
        BidPrice: obj.bidPrice,
        Manufacturer: obj.manufacturer,
        Medicare: obk.medicare,
        PeriodTreatment: obj.periodTreatment,
        Translation: obj.translation,
        Usage: obj.usage,
        Remark: obj.remark,
        IsForeign: obj.isForeign,
        ApprovalNumber: obj.approvalNumber,
        CreateTime: obj.createTime
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, { data: rows });
    });
};

module.exports = new Good();