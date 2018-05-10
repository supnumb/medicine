var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);
var should = require('should');
//, Amount, CostPrice, Quantity, ExpiryDate, BatchNo
let receiptData = {
    VendorName: "哈药集团",
    VendorID: 5,
    Date: '2018-05-06',
    ReceiptGoods: [{
        GoodID: 1,
        Amount: 100,
        CostPrice: 10,
        Quantity: 10,
        ValiableQuantity: 10,
        ExpiryDate: '2020-10-31',
        BatchNo: "12004532"
    }]
};

let ID = 0;

describe("# 进货单模块单元测试", function() {

    before(function(done) {
        agent.post('/api/employee/signin').send({ login_name: "13511111111", password: "super1111" }).expect(200).end(function(err, res) {
            if (err) {
                console.log(err);
            }
            res.text.should.containEql("登录成功");
            done();
        })
    })

    it("##017 添加入库单，应该返回成功：Code=0", function(done) {

        agent.post('/api/receipt/save').send(receiptData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("###026.01 得到指定入库单的详情信息,入库单基本信息，入库单关联的商品信息，应该返回：Code=0", function(done) {
        let ID = 13;
        agent.post(`/api/receipt/${ID}`).send({ ID }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql(0);
            done();
        });
    })

    it("###026.02 入库单结算，应该返回：Code=0", function(done) {
        let ID = 13;
        let goods = [];
        agent.post(`/api/receipt/settle`).send({
            ID,
            goods
        }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql(0);
            done();
        });
    })

    it("###024 按药品名称、供应商名称查询入库单，应该返回：Code=0", function(done) {
        agent.post(`/api/receipt/search`).send({ KeyWord: "感冒灵" }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            //console.log(res.text);
            res.text.should.containEql(0);
            done();
        });
    })

    it("###025 进货单退回（支持部分退回），应该返回：Code=0", function(done) {
        let receiptData = {
            ID: 13,
            VendorName: "哈药集团",
            VendorID: 5,
            Date: '2018-05-06',
            ReceiptGoods: [{
                GoodID: 17,
                Amount: 100,
                CostPrice: 10,
                Quantity: 10,
                ValiableQuantity: 10,
                returnQuantity: 3,
                ExpiryDate: '2020-10-31',
                BatchNo: "12004532"
            }]
        };
        agent.post(`/api/receipt/cancel`).send(receiptData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql(0);
            done();
        });
    })

    it("##018 保存库存调整单单，应该返回成功：Code=0", function(done) {
        let adjustmentData = {
            StockGoods: [{
                GoodID: 1,
                DeltaQuantity: 1,
                Remark: "调整库存"
            }]


        };
        agent.post('/api/receipt/adjustmeno').send(adjustmentData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })
})