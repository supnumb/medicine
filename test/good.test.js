var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);

var should = require('should');
describe("#药品数据模块测试", function() {

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

    it("##016.01 添加|修改药品、应该返回成功，Code=0", function(done) {
        let goodData = {
            Name: "感冒灵颗粒111",
            PinYin: "ganmaoling",
            OfficalName: "感冒药",
            Dimension: "10包/盒",
            FormOfDrug: "20g/包",
            Unit: "包",
            DefaultCostPrice: "15",
            DefaultPrice: "20",
            LimitPrice: "18",
            BidPrice: "15",
            Manufacturer: "哈药六厂",
            Competion: "无",
            Medicare: "有",
            PeriodTreatment: "3",
            Translation: "感冒",
            UseWay: "每次一包，一日三次",
            Remark: "",
            IsForeign: 0,
            ApprovalNumber: "123123"
        };

        //api/good/save 药品添加
        agent.post('/api/good/save').send(goodData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            ID = res.body.data.insertId;

            res.text.should.containEql("0");
            done();
        });
    })

    it("##016.02 删除存在的药品、应该返回成功，Code=0", function(done) {

        agent.post('/api/good/delete').send({ ID }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##016.03 删除不存在的药品、应该返回成功，Code=2", function(done) {
        let ID = -1;

        agent.post('/api/good/delete').send({ ID }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("2");
            done();
        });
    })

    it("##016.03/024 查询药品（按名称、通用名称）,返回数据：药品基本信息、药品库存 应该返回成功，Code=0", function(done) {
        let KeyWord = "";
        let Page = 0,
            Limit = 10,
            StartTime = "",
            EndTime = "";

        agent.post('/api/good/search').send({ KeyWord, Page, Limit, StartTime, EndTime }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            //console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##016.03 得到指定商品的详细信息 应该返回成功，Code=0", function(done) {
        let GoodID = 8;

        agent.post(`/api/good/${GoodID}`).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });


    })
})