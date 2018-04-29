/**
 * 药品&员工表
 */
const Base = require('./base');
const moment = require('moment');

function Good() {
    var _action = {

        //添加
        _add: "insert into Goods (Name,PinYin,OfficalName,Dimension,FormOfDrug,Unit,DefaultCostPrice,DefaultPrice,LimitPrice,BidPrice,Manufacturer,Competion,Medicare,PeriodTreatment,Translation,UseWay,Remark,IsForeign,ApprovalNumber,CreateTime) values (:Name,:PinYin,:OfficalName,:Dimension,:FormOfDrug,:Unit,:DefaultCostPrice,:DefaultPrice,:LimitPrice,:BidPrice,:Manufacturer,:Competion,:Medicare,:PeriodTreatment,:Translation,:UseWay,:Remark,:IsForeign,:ApprovalNumber,curdate());",

        //删除
        _delete: "update Goods set Status=0 where ID=:ID;",

        //修改
        _update: "update Goods set Name=:Name,PinYin=:PinYin,OfficalName=:OfficalName,Dimension=:Dimension,FormOfDrug=:FormOfDrug,Unit=:Unit,DefaultCostPrice=:DefaultCostPrice,DefaultPrice=:DefaultPrice,LimitPrice=:LimitPrice,BidPrice=:BidPrice,Manufacturer=:Manufacturer,Competion=:Competion,Medicare=:Medicare,PeriodTreatment=:PeriodTreatment,Translation=:Translation,UseWay=:UseWay,Remark=:Remark,IsForeign=:IsForeign,ApprovalNumber=:ApprovalNumber where ID=:ID;",

        //列表
        _goodList: "select g.*,ifnull(s.TotalQuantity,0) TotalQuantity,ifnull(s.ValiableQuantity,0) ValiableQuantity,ifnull(s.SaledQuantity,0) SaledQuantity from Goods g left join Stocks s on g.ID=s.GoodID where g.Status=1 and concat(g.Name,g.OfficalName) like :KeyWord group by g.ID order by g.ID desc limit :Page,:Limit;",

        //详情
        _goodInfo: "select g.*,ifnull(s.TotalQuantity,0) TotalQuantity,ifnull(s.ValiableQuantity,0) ValiableQuantity,ifnull(s.SaledQuantity,0) SaledQuantity from Goods g left join Stocks s on g.ID=s.GoodID where g.ID=:ID;",

        //药品查询
        _search: "select * from Goods where Status=1 and Name like :KeyWord;",

    };

    var base = new Base();

    base.mixin(Good.prototype, _action);
    this.prototype = base;
    Base.apply(this, arguments);
};


/**
 * 药品添加
 * @param  {Object} Obj 药品信息
 */
Good.prototype.add = function(Obj, callback) {

    this._add(Obj, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 药品删除
 * @param  {Number} ID 药品ID
 */
Good.prototype.delete = function(ID, callback) {

    this._delete({
        ID: ID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 药品修改
 * @param  {Object} Obj 药品信息
 */
Good.prototype.update = function(Obj, callback) {

    this._update(Obj, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};

/**
 * 药品列表
 * @param  {String} KeyWord 关键字
 * @param  {Number} Page 第几页
 * @param  {Number} Limit 每页显示几条
 * @param  {Date}   StartTime 开始时间
 * @param  {Date}   EndTime 结束时间
 */
Good.prototype.goodList = function(KeyWord, Page, Limit, StartTime, EndTime, callback) {

    this._goodList({
        KeyWord: `%${KeyWord}%`,
        Page,
        Limit,
        StartTime,
        EndTime
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        rows.forEach(function(element, index) {

            rows[index].CreateTime = moment(rows[index].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[index].UpdateTime = moment(rows[index].UpdateTime).format('YYYY-MM-DD HH:mm:ss');

        });

        callback(null, rows);
    });
};

/**
 * 药品详情
 * @param  {Number} ID 药品ID
 */
Good.prototype.goodInfo = function(ID, callback) {

    this._goodInfo({
        ID: ID
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        if (rows.length == 1) {
            rows[0].CreateTime = moment(rows[0].CreateTime).format('YYYY-MM-DD HH:mm:ss');
            rows[0].UpdateTime = moment(rows[0].UpdateTime).format('YYYY-MM-DD HH:mm:ss');
        }

        callback(null, rows[0]);
    });
};

/**
 * 药品查询
 * @param  {String} KeyWord (MobilPhone,Name)
 */
Good.prototype.search = function(KeyWord, callback) {

    this._search({
        KeyWord: `%${KeyWord}%`
    }, function(err, rows) {
        if (err) {
            return callback(err, null);
        }

        callback(null, rows);
    });
};


module.exports = new Good();