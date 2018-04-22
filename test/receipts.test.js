var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);
var should = require('should');

describe("# 进货单模块单元测试", function() {

    before(function(done) {
        agent.post('/api/employee/signin').send({login_name: "13552085563", password: "sup340"}).expect(200).end(function(err, res) {
            if (err) {
                console.log(err);
            }
            res.text.should.containEql("登录成功");
            done();
        })
    })

    it("##017 添加入库单，应该返回成功：Code=0", function(done) {
        let receiptData = {
            goods: []
        };

        agent.post('/api/receipt/save').send {
            receiptData
        }.expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("###026.01 得到指定入库单的详情信息,入库单基本信息，入库单关联的商品信息，应该返回：Code=0", function(done) {
        let receiptid = 0;
        agent.get(`/api/receipt/${receiptid}`).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql(receiptid);
            done();
        });
    })

    it("###026.02 入库单结算，应该返回：Code=0", function(done) {
        let receiptid = 0;
        let goods = [];
        agent.post(`/api/receipt/settle`).send({
            receiptid, goods;
        }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql(receiptid);
            done();
        });
    })

    it("###024 按药品名称、供应商名称查询入库单，应该返回：Code=0", function(done) {
        let receiptid = 0;
        agent.get(`/api/receipt/search`).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql(receiptid);
            done();
        });
    })

    it("###025 进货单退回（支持部分退回），应该返回：Code=0", function(done) {
        let receiptid = 0;
        let goods = [];
        agent.post(`/api/receipt/cancel`).send({receiptid, goods}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql(receiptid);
            done();
        });
    })

    it("##018 保存库存调整单单，应该返回成功：Code=0", function(done) {
        let adjustmentData = {};
        agent.post('/api/receipt/adjustmeno').send {
            adjustmentData
        }.expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })
})
