var config = {

    RedisConfig: {
        redis_port: "6379",
        redis_host: "127.0.0.1",
    },

    DB_TEST: {
        host: 'www.loclive.cn',
        connectionLimit: 50,
        user: "root",
        port: "3360",
        password: "p@ssw0rd",
        database: "Medicine"
    },

    // DB_PRO: {
    //     host: 'localhost',
    //     connectionLimit: 50,
    //     user: "programer",
    //     port: "3306",
    //     password: "p1@32I",
    //     database: "Medicine"
    // }

    DB_PRO: {
        host: 'maria_medicine',
        connectionLimit: 50,
        user: "root",
        port: "3306",
        password: "p1@32I",
        database: "Medicine"
    },
    REDIS_TEST: {
        host: '127.0.0.1',
        port: "6379",
    },

    REDIS: {
        host: 'REDIS',
        port: "6379",
    },

    GetDB: function () {
        let __config = this.DB_TEST;

        if (process.env.NODE_ENV === 'production') {
            __config = this.DB_PRO;
        }

        return __config;
    },

    GetCache: function () {
        let __config = this.REDIS_TEST;

        if (process.env.NODE_ENV === 'production') {
            __config = this.REDIS;
        }

        return __config;
    }
};

module.exports = config;
