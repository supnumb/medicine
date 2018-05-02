var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);

var should = require('should');
describe("#药品基础数据模块测试", function() {

    before(function(done) {
        agent.post('/api/employee/signin').send({ login_name: "13511111111", password: "super1111" }).expect(200).end(function(err, res) {
            if (err) {
                console.log(err);
            }
            res.text.should.containEql("登录成功");
            done();
        })
    })

    let ID = 0;

    it("##009 雇员保存销售单 应该返回成功，Code=0", function(done) {
        let orderData = {
            MemberID: 1,
            Address: '北京',
            Connact: '测试',
            Telephone: '10086',
            TotalAmount: 128,
            ReceiptAmount: 128,
            PayStyle: 1,
            DeliveryCompany: '',
            DeliveryFee: '',
            DeliverCode: '',
            DeliverReceiptFee: '',
            Remark: '',
            Date: '2018-04-30',
            Goods: [
                { GoodID: 1, GoodName: '感冒药', Quantity: 1, FinalPrice: 10 },
                { GoodID: 2, GoodName: '退烧药', Quantity: 1, FinalPrice: 6 }
            ]
        };

        agent.post('/api/order/submit').send(orderData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log("save", res.text);

            ID = req.body.data.insertId;

            res.text.should.containEql(0);
            done();
        });
    })

    it("##009.01 雇员修改销售单 应该返回成功，Code=0", function(done) {
        let orderData = {
            ID,
            MemberID: 1,
            OperatorID: 1,
            Address: '北京',
            Connact: '测试',
            Telephone: '10086',
            TotalAmount: 128,
            ReceiptAmount: 128,
            PayStyle: 1,
            DeliveryCompany: '',
            DeliveryFee: '',
            DeliverCode: '',
            DeliverReceiptFee: '',
            Remark: '',
            Date: '2018-04-30',
            Goods: [
                { GoodID: 1, GoodName: '感冒药', Quantity: 1, FinalPrice: 10 },
                { GoodID: 2, GoodName: '退烧药', Quantity: 0, FinalPrice: 6 }
            ]
        };

        agent.post('/api/order/submit').send(orderData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log("update", res.text);

            res.text.should.containEql(0);
            done();
        });
    })

    it("##010 雇员查询销售单列表(销售单列表+记录条数) 应该返回成功，Code=0", function(done) {
        let KeyWord = "";
        let Page = 0,
            Limit = 10;

        agent.post('/api/order/search').send({ KeyWord, Page, Limit }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##012 雇员设置销售单为退回 应该返回成功，Code=0", function(done) {
        let ID = 72;

        agent.post('/api/order/cancel').send({ ID }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##010.ADD 得到指定销售单详细信息：销售单信息、销售单药品信息 应该返回成功，Code=0", function(done) {
        let ID = 72;

        agent.post(`/api/order/${ID}`).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

});