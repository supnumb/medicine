var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);
var Moment = require('moment');

var should = require('should');
describe("#数据统计模块测试", function () {
    before(function (done) {
        agent.post('/api/employee/signin').send({ login_name: "13511111111", password: "super1111" }).expect(200).end(function (err, res) {
            if (err) {
                console.log(err);
            }
            res.text.should.containEql("登录成功");
            done();
        })
    })

    it("##013 收银统计 应该返回成功，Code=0", function (done) {
        let StartTime = Moment().add(-30, 'day').format('YYYY-MM-DD');
        let EndTime = Moment().format('YYYY-MM-DD');
        let Keyword = "111";

        agent.post('/api/stat/cash').send({ StartTime, EndTime, Keyword }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            console.log(JSON.parse(res.text));
            res.text.should.containEql("0");
            done();
        });
    })

    it("##014 销售员毛利率统计 应该返回成功，Code=0", function (done) {
        let StartTime = "";
        let EndTime = "";
        let EmployeeID = 9474;

        agent.post('/api/stat/rate').send({ EmployeeID, StartTime, EndTime }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            console.log(JSON.parse(res.text));
            res.text.should.containEql("0");
            done();
        });
    })

    it.only("##015 品类统计 应该返回成功，Code=0", function (done) {
        let StartTime = "";
        let EndTime = "";
        let Keyword = "感冒";

        agent.post('/api/stat/good').send({ Keyword, StartTime, EndTime }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            console.log(JSON.parse(res.text));
            res.text.should.containEql("0");
            done();
        });
    })


    it("##015 库存统计 应该返回成功，Code=0", function (done) {
        let StartTime = "";
        let EndTime = "";

        agent.post('/api/stock/search').send({ StartTime, EndTime }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            console.log(JSON.parse(res.text));
            res.text.should.containEql("0");
            done();
        });
    })

})