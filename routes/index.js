var express = require('express');
var router = express.Router();
const member = require('../src/controllers/member');


/* GET home page. */
router.get('/', function (req, res, next) {
<<<<<<< Updated upstream

    var user = {};

    if (req.session && req.session.user) {
        user = req.session.user
    }

    res.render('a', { user: user });
=======
    res.render('orderList');
>>>>>>> Stashed changes
});

router.get('/memberList', function (req, res, next) {
    res.render('index');
});

router.get('/memberAdd', function (req, res, next) {
    res.render('memberAdd');
});

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
router.get('/orderAdd', function (req, res, next) {
    res.render('orderAdd');
});


router.get('/orderList', function (req, res, next) {
    res.render('orderList');
});

// router.get('/back_index', member.checkUser, function (req, res, next) {
router.get('/back_index', function (req, res, next) {
    res.render('back');
});

<<<<<<< Updated upstream
router.get('/employee_signin/', function (req, res, next) {
    res.render('employee_signin');
});

module.exports = router;
=======
router.get('/employee_signin/:from', function (req, res, next) {
    res.render('employee_signin');
});

module.exports = router;
>>>>>>> Stashed changes
