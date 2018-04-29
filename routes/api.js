var express = require('express');
var router = express.Router();
var member = require('../src/controllers/member');
var good = require('../src/controllers/good');

//管理员登录
router.post('/employee/signin', member.signIn);

//管理员登出
router.post('/employee/signout', member.signOut);

//添加会员
router.post('/member/add', member.addMember);

//删除会员
router.post('/member/delete', member.deleteMember);

//修改会员
router.post('/member/update', member.updateMember);

//会员列表(会员信息、意向单数量、回访记录数量、成单数量)
router.post('/member/search', member.memberList);

//会员详情(会员信息、意向记录、回访记录、、成单记录)
router.post('/member/:MemberID', member.memberInfo);

//回访记录添加
router.post('/visit/save', member.addVisit);

//回访记录列表,回访记录搜索
router.post('/visit/list', member.visitList);

//意向记录添加
router.post('/intention/save', member.addIntention);

//意向记录列表
router.post('/intention/list', member.intentionList);

//药品添加
router.post('/good/save', good.addGood);

//药品删除
router.post('/good/delete', good.deleteGood);

//药品修改
router.post('/good/update', good.updateGood);

//药品查询
router.post('/good/search', good.goodList);

//药品详情
router.post('/good/:GoodID', good.goodInfo);


module.exports = router;