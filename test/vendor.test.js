var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);

var should = require('should');
describe("#供应商数据模块测试", function () {

    before(function (done) {
        agent.post('/api/employee/signin').send({ login_name: "13511111111", password: "super1111" }).expect(200).end(function (err, res) {
            if (err) {
                console.log(err);
                return done();
            }

            console.log(res.text);

            done();
        })
    })

    let ID = 0;

    it("##07.01 添加供应商、应该返回成功，Code=0", function (done) {
        let vendorData = {
            Name: "哈药集团",
            Telephone: "11111111111",
            Address: "哈尔滨市",
            Contact: "张三",
            Remark: "无"
        };

        agent.post('/api/vendor/save').send(vendorData).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            ID = res.body.data.insertId;

            res.text.should.containEql("0");
            done();
        });
    })

    it("##07.02 删除存在的供应商、应该返回成功，Code=0", function (done) {

        agent.post('/api/vendor/delete').send({ ID }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##07.03 删除不存在的供应商、应该返回成功，Code=2", function (done) {

        agent.post('/api/vendor/delete').send({ ID: 1000 }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("2");
            done();
        });
    })

    it("##07.04 修改供应商、应该返回成功，Code=0", function (done) {

        let vendorData = {
            Name: "哈药集团2",
            Telephone: "11111111111",
            Address: "哈尔滨市",
            Contact: "张三",
            Remark: "无"
        };

        vendorData.ID = 10;

        agent.post('/api/vendor/save').send(vendorData).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("2");
            done();
        });
    })

    it("##07.05 查询供应商（按名称）,返回数据：供应商基本信息，Code=0", function (done) {
        let KeyWord = "辉";
        let Page = 0,
            Limit = 10;

        agent.post('/api/vendor/search').send({ KeyWord, Page, Limit }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql(KeyWord);

            res.text.should.containEql("0");
            done();
        });
    })

    it("##07.06 查询供应商的详细信息 应该返回成功，Code=0", function (done) {

        let VendorID = ID;

        agent.post(`/api/vendor/${VendorID}`).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

        

            res.text.should.containEql("0");
            done();
        });


    })
})