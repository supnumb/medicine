const Good = require('./good');
const Intention = require('./intention');
const Member = require('./member');
const { Order, OrderTran } = require('./order');
const { Receipt, ReceiptTran } = require('./receipt');
const { Stock, StockTran } = require('./stock');
const Vendor = require('./vendor');
const Visit = require('./visit');

module.exports = {
    Good,
    Intention,
    Member,
    Order,
    OrderTran,
    Receipt,
    ReceiptTran,
    Stock,
    StockTran,
    Vendor,
    Visit
}