var express = require('express');
var router = express.Router();
let API = require('./src/api');
const Auth = require('./src/middle_wares/auth');

router.post('/member/signup', API.Member.signup);
router.post('/member/signin', API.Member.signin);


module.exports = router;
