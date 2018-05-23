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

    it.only("##009 雇员保存销售单 应该返回成功，Code=0", function(done) {
        let orderData = {
            "Date": "2018-05-16",
            "DeliveryCode": "",
            "DeliveryCompany": "",
            "DeliveryFee": "",
            "Connact": "测试会员0.6560717433817314",
            "Name": "测试会员0.6560717433817314",
            "MobilPhone": "13511111112",
            "Telephone": "13511111112",
            "Address": "哈尔滨市要",
            "MemberID": 85,
            "PayStyle": "1",
            "EmployeeID": 90,
            "Employee": { "ID": 90, "Name": "张三", "PinYin": "", "Telephone": "", "Password": "$2a$10$Onjws2toeoL4x.HbDt3Rsut4pz6xERoYP.nKp0pqbIOkGVZ.dmu3S", "City": "", "Gender": "男", "Address": "", "label": "", "Remark": "", "MobilPhone": "11111111111", "WeiXinCode": "", "IsWeixinFriend": 0, "FriendName": "", "BirthYear": "", "Diseases": "", "RelationWithPatient": "", "Status": 1, "Flag": 1, "CreateTime": "2018-05-17 17:10:51", "UpdateTime": "2018-05-17 17:13:56" },
            "ReceiptAmount": 20,
            "TotalAmount": 20,
            "Goods": [{ "ID": 20, "Name": "感冒灵颗粒111", "PinYin": "ganmaoling", "OfficalName": "感冒药", "Dimension": "10包/盒", "FormOfDrug": "20g/包", "Unit": "包", "DefaultCostPrice": 15, "DefaultPrice": 20, "LimitPrice": 18, "BidPrice": 15, "Manufacturer": "哈药六厂", "Competion": "无", "Medicare": "有", "PeriodTreatment": "3", "Translation": "感冒", "UseWay": "每次一包，一日三次", "Remark": "", "IsForeign": 0, "ApprovalNumber": "123123", "Status": 1, "Flag": 0, "CreateTime": "2018-05-06 00:00:00", "UpdateTime": "2018-05-08 16:12:27", "TotalQuantity": 0, "ValiableQuantity": 0, "SaledQuantity": 0, "GoodID": 20, "Quantity": 1, "FinalPrice": 20, "GoodSumPrice": 20 }, { "ID": 21, "Name": "感冒灵颗粒111", "PinYin": "ganmaoling", "OfficalName": "感冒药", "Dimension": "10包/盒", "FormOfDrug": "20g/包", "Unit": "包", "DefaultCostPrice": 15, "DefaultPrice": 20, "LimitPrice": 18, "BidPrice": 15, "Manufacturer": "哈药六厂", "Competion": "无", "Medicare": "有", "PeriodTreatment": "3", "Translation": "感冒", "UseWay": "每次一包，一日三次", "Remark": "", "IsForeign": 0, "ApprovalNumber": "123123", "Status": 1, "Flag": 0, "CreateTime": "2018-05-08 00:00:00", "UpdateTime": "2018-05-08 16:12:29", "TotalQuantity": 0, "ValiableQuantity": 0, "SaledQuantity": 0, "GoodID": 21, "Quantity": 1, "FinalPrice": 20, "GoodSumPrice": 20 }]
        }

        agent.post('/api/order/submit').send(orderData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            ID = res.body.data.ID;

            res.text.should.containEql(0);
            done();
        });
    })

    it("##009.01 雇员修改销售单 应该返回成功，Code=0", function(done) {

        let orderData = {
            ID,
            MemberID: 1,
            EmployeeID: 50,
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
            Goods: [{
                GoodID: 1,
                GoodName: '感冒药',
                Quantity: 1,
                FinalPrice: 10
            }, {
                GoodID: 17,
                GoodName: '退烧药',
                Quantity: 0,
                FinalPrice: 6
            }]
        };

        agent.post('/api/order/submit').send(orderData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);

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
            res.text.should.containEql("0");
            done();
        });
    })

    it("##012 雇员设置销售单为退回 应该返回成功，Code=0", function(done) {
        ID = ID || 117;

        agent.post('/api/order/cancel').send({ ID }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##010.ADD 得到指定销售单详细信息：销售单信息、销售单药品信息 应该返回成功，Code=0", function(done) {
        ID = ID || 123;

        agent.post('/api/order/info').send({ ID }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            //console.log(res.text);

            res.text.should.containEql("0");
            done();
        });
    })

});
