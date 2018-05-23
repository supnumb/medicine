var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);

var should = require('should');

let memberData = {
    "Name": "测试会员" + Math.random(),
    "PinYin": "test Member",
    "Password": "super1111",
    "City": "北京市",
    "Gender": "男",
    "Address": "北京花家地南里",
    "Remark": "注释",
    "MobilPhone": "13511111112",
    "WeiXinCode": "111111",
    "IsWeixinFriend": 1,
    "FriendName": "张三",
    "BirthYear": "70",
    "Diseases": "高血压",
    "RelationWithPatient": "妈妈"
};

let MemberID = 0;

describe("#会员模块测试", function() {
    before(function(done) {
        agent.post('/api/employee/signin').send({ login_name: "13511111111", password: "super1111" }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

						console.log(res.text);

            res.text.should.containEql("登录成功");
            done();
        });
    })

    it("##005.01 会员添加", function(done) {
        agent.post('/api/member/save').send(memberData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            MemberID = res.body.data.insertId;

            res.text.should.containEql("0");
            done();
        });
    })

    it("##005.02 删除存在的会员，应该返回成功", function(done) {
        let MemberID = 2;
        agent.post('/api/member/delete').send({ MemberID }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##005.03 修改存在的会员，应该返回Code=0", function(done) {

        memberData.ID = MemberID;

        agent.post('/api/member/save').send(memberData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##005.04 修改不存在的会员，应该返回Code=2", function(done) {
        memberData.ID = 2000;
        agent.post('/api/member/update').send(memberData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("2");
            done();
        });
    })

    //skip
    it("##005.05 修改会员,数据库连接不上，应该返回Code=-1", function(done) {
        memberData.ID = 100;

        agent.post('/api/member/update').send(memberData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("2");
            done();
        });
    })

    it("##006 会员列表，按时间倒序列出，返回数据里包含：电话、姓名、意向单内容、回访记录数量，成单数量", function(done) {

        agent.post('/api/member/search').send({ OrderBy: "ID" }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    });

    //skip
    it("##006.01 导出指定条件的会员列表", function(done) {
        let KeyWord = "";
        let Page = 0;
        let Limit = 10;
        let MobilPhone = '';
        let startTime = "";
        let endTime = "";

        agent.post('/api/member/search').send({ KeyWord, Page, Limit, MobilPhone, action: "export" }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    });

    it("##001/007 查询会员，按名称、电话、地址,默认返回前10个", function(done) {
        let KeyWord = "测试";
        let MobilPhone = "";
        let Page = 0; //第几页
        let Limit = 20; //查询几个；

        //名称和地址支持模糊查询
        //电话要精确查询
        agent.post('/api/member/search').send({ KeyWord, MobilPhone, Page, Limit }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            let json = JSON.parse(res.text);

            res.text.should.containEql(KeyWord);
            done();
        });
    })

    it("##002 得到指定的会员详细信息(数据存在)，应该返回Code=0;详细信息有：会员基本信息、回访记录、意向记录、成单记录", function(done) {

        agent.post(`/api/member/${MemberID}`).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##002.01 得到指定的会员详细信息(数据不存在)，应该返回Code=2;", function(done) {
        let MemberID = 1000;
        agent.post(`/api/member/${MemberID}`).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("2");
            done();
        });
    })

    it("##003 保存回访记录，应该返回Code=0", function(done) {
        let now = new Date();
        let visit = {
            MemberID: "2",
            Remarks: "备注"
        };

        agent.post('/api/visit/save').send(visit).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##004 保存会员购买意向记录；返回Code=0", function(done) {
        let intention = {
            MemberID: 84,
            Goods: "意向商品"
        };
        agent.post('/api/intention/save').send(intention).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 列出公司所有正在使用的雇员 ", function(done) {
        agent.post('/api/employee/search').expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 公司雇员添加 ", function(done) {
        let employeeData = {
            Name: "张三",
            MobilPhone: "11111111111",
            Password: "123456"
        };

        agent.post('/api/employee/save').send(employeeData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 登录雇员详细信息 ", function(done) {

        agent.post('/api/employee/profile').expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 公司雇员修改密码 ", function(done) {
        let OldPass = "123";
        let NewPass = "123";
        let MemberID = 90;

        agent.post('/api/employee/alterpass').send({ OldPass, NewPass, MemberID }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 管理员重置雇员密码 ", function(done) {
        let NewPass = "123";
        let MemberID = 90;

        agent.post('/api/employee/alterpass').send({ MemberID, NewPass }).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })


    it("## 列出公司所有正在使用的雇员 ", function(done) {
        agent.post('/api/employee/search').expect(200).end(function(err, res) {

            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

});
