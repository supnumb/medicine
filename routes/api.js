const express = require('express');
const router = express.Router();
const employee = require('../src/controllers/employee');
const member = require('../src/controllers/member');
const good = require('../src/controllers/good');
const order = require('../src/controllers/order');
const vendor = require('../src/controllers/vendor');
const receipt = require('../src/controllers/receipt');
const stock = require('../src/controllers/stock');
const stat = require('../src/controllers/stat');

//管理员登录
router.post('/employee/signin', member.signIn);

//管理员登出
router.post('/employee/signout', member.signOut);

//公司雇员列表
router.post('/employee/search', member.checkUser, employee.search);

//添加雇员
router.post('/employee/save', member.checkUser, employee.addEmployee);

// 雇员详情
router.get('/employee/profile', employee.profile);

//管理员重置密码
router.post('/employee/alterpass', member.checkUser, employee.alterpass);
router.post('/employee/togglestatus', member.checkUser, employee.toggleStatus);

//添加会员
router.post('/member/save', member.checkUser, member.save);

//删除会员
router.post('/member/delete', member.checkUser, member.deleteMember);

//会员列表(会员信息、意向单数量、回访记录数量、成单数量)
router.post('/member/search', member.checkUser, member.memberList);

//会员详情(会员信息、意向记录、回访记录、、成单记录)
router.post('/member/:MemberID', member.checkUser, member.memberInfo);

//回访记录添加
router.post('/visit/save', member.checkUser, member.addVisit);

//回访记录列表,回访记录搜索
router.post('/visit/list', member.checkUser, member.visitList);

//意向记录添加
router.post('/intention/save', member.checkUser, member.addIntention);

//意向单修改
router.post('/intention/update', member.checkUser, member.updateIntention);

//意向记录列表
router.post('/intention/list', member.checkUser, member.intentionList);

//药品添加
router.post('/good/save', member.checkUser, good.addGood);

//药品删除
router.post('/good/delete', member.checkUser, good.deleteGood);

//药品修改
router.post('/good/update', member.checkUser, good.updateGood);

//药品查询
router.post('/good/search', member.checkUser, good.goodList);

//药品详情
router.post('/good/:GoodID', member.checkUser, good.goodInfo);

//销售单添加、修改
router.post('/order/submit', member.checkUser, order.edit);

//销售单退回
router.post('/order/cancel', member.checkUser, order.cancel);

//销售单列表
router.post('/order/search', member.checkUser, order.orderList);

//销售订单详情
router.post('/order/info', member.checkUser, order.orderInfo);

router.post('/order/print_ticket', member.checkUser, order.printOrder);
router.post('/order/print_deliver', member.checkUser, order.printDeliver);

//供应商添加
router.post('/vendor/save', member.checkUser, vendor.addVendor);

//供应商删除
router.post('/vendor/delete', member.checkUser, vendor.deleteVendor);

//供应商查询
router.post('/vendor/search', member.checkUser, vendor.vendorList);

//供应商详情
router.post('/vendor/:VendorID', member.checkUser, vendor.vendorInfo);

//入库单添加、修改
router.post('/receipt/save', member.checkUser, receipt.save);

//入库单查询
router.post('/receipt/search', member.checkUser, receipt.receiptList);

//入库单结算
router.post('/receipt/settle', member.checkUser, receipt.settle);

//调整单录入
router.post('/receipt/adjustmeno', member.checkUser, stock.revision);

//入库单详情
router.post('/receipt/detail', member.checkUser, receipt.receiptInfo);

//库存查询
router.post('/stock/search', member.checkUser, stock.stockList);

//最新库存信息
router.post('/stat/stocks', member.checkUser, stock.stocks);

//收银统计
router.post('/stat/cash', member.checkUser, stat.cash);

//销售员毛利率统计
router.post('/stat/rate', member.checkUser, stat.rate);

//品类统计
router.post('/stat/good', member.checkUser, stat.good);

module.exports = router;