var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);

var should = require('should');
describe("#药品基础数据模块测试", function() {

    before(function(done) {
        agent.post('/api/employee/signin').send({login_name: "13552085563", password: "sup340"}).expect(200).end(function(err, res) {
            if (err) {
                console.log(err);
            }
            res.text.should.containEql("登录成功");
            done();
        })
    })

    it("##009 雇员保存销售单 应该返回成功，Code=0", function(done) {
        let orderData = {};

        agent.post('/api/order/submit').send({orderData}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##009.01 雇员修改销售单 应该返回成功，Code=0", function(done) {
        let orderData = {
            ID: 1
        };

        agent.post('/api/order/submit').send({orderData}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##010 雇员查询销售单列表(销售单列表+记录条数) 应该返回成功，Code=0", function(done) {
        let keyword = "";
        let start = 0,
            length = 10;

        agent.post('/api/order/search').send({keyword, start, length}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##012 雇员设置销售单为退回 应该返回成功，Code=0", function(done) {
        let orderid = 2;

        agent.post('/api/order/cancel').send({orderid}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##010.ADD 得到指定销售单详细信息：销售单信息、销售单药品信息 应该返回成功，Code=0", function(done) {
        let orderid = 2;

        agent.get(`/api/order/${orderid}`).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

});
