var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);

var should = require('should');
describe("#数据统计模块测试", function() {
    before(function(done) {
        agent.post('/api/employee/signin').send({ login_name: "13552085563", password: "sup340" }).expect(200).end(function(err, res) {
            if (err) {
                console.log(err);
            }
            res.text.should.containEql("登录成功");
            done();
        })
    })

    it("##013 收银统计 应该返回成功，Code=0", function(done) {
        let startTime = "";
        let endTime = "";

        agent.get('/api/stat/cash').send({ startTime, endTime }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##014 销售员毛利率统计 应该返回成功，Code=0", function(done) {
        let startTime = "";
        let endTime = "";

        agent.get('/api/stat/rate').send({ startTime, endTime }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##015 品类统计 应该返回成功，Code=0", function(done) {
        let startTime = "";
        let endTime = "";

        agent.get('/api/stat/good').send({ startTime, endTime }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })
})