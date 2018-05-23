var createError = require('http-errors');
var express = require('express');
var path = require('path');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var session = require('express-session');
//var RedisStore = require('connect-redis')(session);
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'view/'));
app.set('views', path.join(__dirname, '/public/assets/html'));
// app.set('views', path.join(__dirname, 'views'));
// app.set('views', path.join(__dirname, '/public/assets/html'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'medicineWeb',
    name: 'medicine',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
    resave: false,
    saveUninitialized: true,
    // store: new RedisStore({
    //     port: "",
    //     host: "",
    //     pass: "",
    //     db: 2
    // })
}));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    //next(createError(404));
    res.status(404).send({ message: "Not Found" });
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err);

    // render the error page
    res.status(err.status || 500).send({
        code: -1, message: "Server Error", data: err
    });
    //res.render('error');
});

module.exports = app;