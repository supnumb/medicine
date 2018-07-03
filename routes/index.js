var express = require('express');
var router = express.Router();
const member = require('../src/controllers/member');
const { Order } = require('../src/models/order');

const Moment = require('moment');

/* GET home page. */
// router.get('/memberList', function (req, res, next) {
//     res.render('index');
// });

// router.get('/memberAdd', function (req, res, next) {
//     res.render('memberAdd');
// });

// router.get('/orderAdd', function (req, res, next) {
//     res.render('orderAdd');
// });

// router.get('/orderList', function (req, res, next) {
//     res.render('orderList');
// });

router.get('/employee_signin/', function (req, res, next) {
    res.render('employee_signin');
});

/**
 * 打印订单小票s
 */
router.get('/order/view_ticket', function (req, res, next) {
    let { orderid } = req.query;

    if (orderid > 0) {
        Order.orderInfo(orderid, function (err, result) {
            if (err) {
                return res.status(500).send({ code: -1, message: "数据库错误" });
            }

            const { rows: [orderInfo], goods } = result;

            if (orderInfo) {
                orderInfo.Time = Moment(orderInfo.CreateTime).format("hh:mm:ss");
                orderInfo.CreateDate = Moment(orderInfo.CreateTime).format("YYYY-MM-DD");

                res.render("order_ticket", { order: orderInfo, goods: goods })
            } else {
                res.status(404).send({ code: 2, message: "指定订单不存在！" })
            }
        })
    } else {
        res.status(404).send({ code: 2, message: "请指定打印的订单ID" })
    }
});

/**
 * 打印订单快递
 */
router.get('/order/view_deliver_ticket', function (req, res, next) {

    let { orderid, MemberName, MobilPhone, Address, DeliveryCompany, EmployeeName } = req.query;

    let Connact = decodeURIComponent(MemberName);
    let Telephone = decodeURIComponent(MobilPhone);
    Address = decodeURIComponent(Address);
    DeliveryCompany = decodeURIComponent(DeliveryCompany);
    EmployeeName = decodeURIComponent(EmployeeName);

    console.log({ orderid, Connact, Telephone, Address, DeliveryCompany, EmployeeName });

    if (orderid > 0) {
        Order.orderInfo(orderid, function (err, result) {
            const { rows: [orderInfo] } = result;
            console.log(orderInfo);

            res.render("deliver_ticket", { order: orderInfo })
        })
    } else {
        res.render("deliver_ticket", { order: { Connact, Telephone, Address, DeliveryCompany, EmployeeName } })
    }
})

router.get('/*', member.checkUser, function (req, res, next) {
    // router.get('/back_index', function (req, res, next) {
    res.render('back');
});

module.exports = router;
