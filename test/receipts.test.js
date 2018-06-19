var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);
var should = require('should');
//Amount, CostPrice, Quantity, ExpiryDate, BatchNo
let receiptData = {
    ID: 0,
    VendorName: '哈药集团',
    VendorID: 43,
    Contact: '张三',
    Telephone: '11111111111',
    Date: '2018-06-09',
    ReceiptAmount: 15,
    TotalAmount: 15,
    IsReturn: true,
    ReceiptGoods:
        [{
            GoodID: 43,
            Quantity: 100,
            ExpiryDate: '2018-10-08',
            BatchNo: 'A12345678',
            CostPrice: 55,
            Name: 'Y01',
            ValiableQuantity: 100,
            Flag: 0,
            OfficalName: '测试药品',
        }]
}

let ID = 0;

describe("# 进货单模块单元测试", function () {

    before(function (done) {
        agent.post('/api/employee/signin').send({ login_name: "13511111111", password: "super1111" }).expect(200).end(function (err, res) {
            if (err) {
                console.log(err);
            }
            res.text.should.containEql("登录成功");
            done();
        })
    })

    it.only("##017 添加入库单，应该返回成功：Code=0", function (done) {
        agent.post('/api/receipt/save').send(receiptData).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);

            res.text.should.containEql("0");
            done();
        });
    })

    it("###026.01 得到指定入库单的详情信息,入库单基本信息，入库单关联的商品信息，应该返回：Code=0", function (done) {
        let ID = 65;
        agent.post(`/api/receipt/detail`).send({ ID }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);

            res.text.should.containEql(0);
            done();
        });
    })

    it("###026.02 入库单结算，应该返回：Code=0", function (done) {
        let ID = 18;
        let goods = [];
        agent.post(`/api/receipt/settle`).send({
            ID,
            goods
        }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql(0);
            console.log(res.text);
            //res.text.should.containEql("VendorName");
            //res.text.should.containEql("VendorID");
            //res.text.should.containEql("OperatorID");
            //res.text.should.containEql("OperatorName");

            //res.text.should.containEql(receiptid);
            done();
        });
    })

    it("###024 按药品名称、供应商名称查询入库单，应该返回：Code=0", function (done) {
        agent.post(`/api/receipt/search`).send({ KeyWord: "" }).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql(0);
            done();
        });
    })

    it("###025 进货单退回（支持部分退回），应该返回：Code=0", function (done) {
        let receiptData = {
            ID: 13,
            VendorName: "哈药集团",
            VendorID: 5,
            Date: '2018-05-06',
            ReceiptGoods: [{
                GoodID: 17,
                CostPrice: 10,
                Quantity: 10,
                ReturnQuantity: 3,
                ExpiryDate: '2020-10-31',
                BatchNo: "12004532"
            }]
        };
        agent.post(`/api/receipt/return`).send(receiptData).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql(0);
            done();
        });
    })

    it("##018 保存库存调整单单，应该返回成功：Code=0", function (done) {
        let adjustmentData = {
            StockGoods: [{
                GoodID: 1,
                DeltaQuantity: 1,
                Remark: "调整库存"
            }]


        };
        agent.post('/api/receipt/adjustmeno').send(adjustmentData).expect(200).end(function (err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })
})