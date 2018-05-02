const express = require('express');
const router = express.Router();
const member = require('../src/controllers/member');
const good = require('../src/controllers/good');
const order = require('../src/controllers/order');
const vendor = require('../src/controllers/vendor');

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

//销售单添加、修改
router.post('/order/submit', order.edit);

//销售单退回
router.post('/order/cancel', order.cancel);

//销售单列表
router.post('/order/search', order.orderList);

//销售订单详情
router.post('/order/info', order.orderInfo);

//供应商添加
router.post('/vendor/save', vendor.addVendor);

//供应商删除
router.post('/vendor/delete', vendor.deleteVendor);

//供应商修改
router.post('/vendor/update', vendor.updateVendor);

//供应商查询
router.post('/vendor/search', vendor.vendorList);

//供应商详情
router.post('/vendor/:VendorID', vendor.vendorInfo);


module.exports = router;