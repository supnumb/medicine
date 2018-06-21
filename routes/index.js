var express = require('express');
var router = express.Router();
const member = require('../src/controllers/member');
const { Order } = require('../src/models/order');


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


router.get('/order/view_ticket', function (req, res, next) {

    Order.orderInfo(204, function (err, result) {
        const { rows: [orderInfo], goods } = result;
        console.log(orderInfo);
        console.log(goods);
        
        res.render("order_ticket", { order: orderInfo, goods: JSON.stringify(goods) })
    })
})

router.get('/*', member.checkUser, function (req, res, next) {
    // router.get('/back_index', function (req, res, next) {
    res.render('back');
});

module.exports = router;
