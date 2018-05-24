var express = require('express');
var router = express.Router();
const member = require('../src/controllers/member');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('orderList');
});

router.get('/memberList', function (req, res, next) {
    res.render('index');
});

router.get('/memberAdd', function (req, res, next) {
    res.render('memberAdd');
});

router.get('/orderAdd', function (req, res, next) {
    res.render('orderAdd');
});


router.get('/orderList', function (req, res, next) {
    res.render('orderList');
});

router.get('/back_index', member.checkUser, function (req, res, next) {
// router.get('/back_index', function (req, res, next) {
    res.render('back');
});

router.get('/employee_signin/', function (req, res, next) {
    res.render('employee_signin');
});

module.exports = router;
