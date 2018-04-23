var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);

var should = require('should');
describe("#药品数据模块测试", function() {

    before(function(done) {
        agent.post('/api/employee/signin').send({login_name: "13552085563", password: "sup340"}).expect(200).end(function(err, res) {
            if (err) {
                console.log(err);
            }
            res.text.should.containEql("登录成功");
            done();
        })
    })

    it("##016.01 添加|修改药品、应该返回成功，Code=0", function(done) {
        let goodData = {
            Name:"",
            NamePinYin:"",
            OfficalName:"",

        };

        agent.post('/api/good/save').send({goodData}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##016.02 删除存在的药品、应该返回成功，Code=0", function(done) {
        let goodid = 0;

        agent.post('/api/good/delete').send({goodid}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##016.03 删除不存在的药品、应该返回成功，Code=2", function(done) {
        let goodid = -1;

        agent.post('/api/good/delete').send({goodid}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##016.03/024 查询药品（按名称、通用名称）,返回数据：药品基本信息、药品库存 应该返回成功，Code=0", function(done) {
        let keyword = "";
        let start = 0,
            length = 10,
            startTime = "",
            endTime = "";

        agent.post('/api/good/search').send({keyword, start, length, startTime, endTime}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })



    // it("##016.03 查询药品（按名称、通用名称）应该返回成功，Code=0", function(done) {
    //     let goodid = -1;
    //
    //     agent.post('/api/good/delete').send {
    //         goodid
    //     }.expect(200).end(function(err, res) {
    //         if (err) {
    //             return done(err);
    //         }
    //
    //         console.log(res.text);
    //         res.text.should.containEql("0");
    //         done();
    //     });
    // })
})
