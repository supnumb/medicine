var express = require('express');
var router = express.Router();
var member = require('../src/controllers/member');
var good = require('../src/controllers/good');

//管理员登录
router.post('/employee/signin', member.signin);

//管理员登出
router.post('/employee/signout', member.signout);

//会员查询(按电话、名称查询)
router.post('/member/search', member.search);

//会员详情(会员信息、回访记录、意向记录)
router.post('/member/:id', member.memberInfo);

//会员跟踪(回访记录列表,回访记录搜索）
router.post('/visit/list', member.visitList);

//会员购买意向(意向记录列表)
router.post('/intention/list', member.intentionList);

//会员购买意向(意向记录添加)
router.post('/intention/add', member.intentionAdd);

//添加会员
router.post('/member/add', member.addMember);

//删除会员
router.post('/member/delete', member.deleteMember);

//修改会员
router.post('/member/update', member.updateMember);

//会员列表(电话、姓名、意向单内容、回访记录数量、成单数量)
router.post('/member/list', member.memberList);


//药品添加
router.post('/good/add', good.addMember);

//药品修改
router.post('/good/upd', good.updateGood);

//药品删除
router.post('/good/remove', good.deleteGood);

//药品列表
router.post('/good/lits', good.goodList);

//药品查询
router.post('/good/search', good.search);


module.exports = router;