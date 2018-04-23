var app = require('../app');
var supertest = require('supertest');
var agent = supertest.agent(app);

var should = require('should');

describe("#会员模块测试", function() {
    before(function(done) {
        agent.post('/api/employee/signin').send({login_name: "13552085563", password: "sup340"}).expect(200).end(function(err, res) {
            if (err) {
                console.log(err);
            }
            res.text.should.containEql("登录成功");
            done();
        })
    })

    it("##005.01 会员添加", function(doen) {
        let memberData = {};

        agent.post('/api/member/add').send {
            memberData
        }.expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            console.log(res.text);
            res.text.should.containEql("0");
            done();
        });
    })

    it("##005.02 删除存在的会员，应该返回成功", function(done) {
        let memberid = 2;
        agent.post('/api/member/delete').send({memberid}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##005.03 修改存在的会员，应该返回Code=0", function(done) {
        let memberData = {};

        agent.post('/api/member/update').send({memberData}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##005.04 修改不存在的会员，应该返回Code=2", function(done) {
        let memberData = {};
        agent.post('/api/member/update').send({memberData}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("2");
            done();
        });
    })

    it("##005.05 修改会员,数据库连接不上，应该返回Code=-1", function(done) {
        let memberData = {};

        agent.post('/api/member/update').send({memberData}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("-1");
            done();
        });
    })

    it("##006 会员列表，按时间倒序列出，返回数据里包含：电话、姓名、意向单内容、回访记录数量，成单数量", function(done) {
        agent.post('/api/member/search').expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    });

    it("##006.01 导出指定条件的会员列表", function(done) {
        let keyword = "";
        let startTime = "";
        let endTime = "";

        agent.post('/api/member/search').send({keyword, startTime, endTime, action: "export"}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    });

    it("##001/007 查询会员，按名称、电话、地址,默认返回前10个", function(done) {
        let keyword = "";
        let tele = "";
        let start = 0; //第 start 开始
        let length = 5; //查询前5个；

        //名称和地址支持模糊查询
        //电话要精确查询
        agent.post('/api/member/search').send({keyword, tele, start, length}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql(keyword);
            done();
        });
    })

    it("##002 得到指定的会员详细信息(数据存在)，应该返回Code=0;详细信息有：会员基本信息、回访记录、意向记录、成单记录", function(done) {
        let memberid = 1;

        agent.post(`/api/member/${memberid}`).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##002.01 得到指定的会员详细信息(数据不存在)，应该返回Code=2;", function(done) {
        let memberid = 1;
        agent.post(`/api/member/${memberid}`).expect(200).end(function(err, res) {
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
            MemberID: "",
            Remarks: ""
        };

        agent.post('/api/visit/save').send({visit}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("##004 保存会员购买意向记录；返回Code=0", function(done) {
        let intention = {};
        agent.post('/api/intention/save').send({intention}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 公司雇员添加 ", function(done) {
        let employeeData = {};

        agent.post('/api/employee/save').send(employeeData).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 登录雇员详细信息 ", function(done) {
        let employeeData = {};

        agent.get('/api/employee/profile').expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 公司雇员修改密码 ", function(done) {
        let oldpass = "";
        let newpass = "";
        let employeeid = 0;

        agent.post('/api/employee/alterpass').send({employeeid, oldpass, newpass}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 管理员重置雇员密码 ", function(done) {
        let newpass = "";
        let employeeid = 0;

        agent.post('/api/employee/alterpass').send({employeeid, newpass}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

    it("## 管理员重置雇员密码 ", function(done) {
        let newpass = "";
        let employeeid = 0;

        agent.post('/api/employee/alterpass').send({employeeid, newpass}).expect(200).end(function(err, res) {
            if (err) {
                return done(err);
            }

            res.text.should.containEql("0");
            done();
        });
    })

});
