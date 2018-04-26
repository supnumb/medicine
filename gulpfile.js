//********************************
// 打包前台代码，React代码
//
// 1、清空public/assets/缓存
// 2、打包javascript代码、stylesheets代码；
// 3、压缩图片文件
//
//********************************

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    babel = require('gulp-babel'),
    webpack = require('webpack'),
    gutil = require('gulp-util');

var isDebug = process.env.NODE_ENV === 'development';

var jsFiles = isDebug
    ? ['build/libs/debug/lib.js']
    : ['build/libs/disk/lib.js'];

jsFiles.push('!public/javascripts/*.min.js');

gulp.task('vendor', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js']).pipe(concat('vendor.js')).pipe(gulpif(!isDebug, uglify({mangle: false}))).pipe(gulp.dest('public/assets/js'));
});

gulp.task('styles', function() {
    return gulp.src('public/stylesheets/*.scss').pipe(sass({style: 'expanded'})).pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')).pipe(gulp.dest('public/assets/css/')).pipe(rename({suffix: '.min'})).pipe(minifycss()).pipe(gulp.dest('public/assets/css/'));
});


//生成dll库
gulp.task("pack_lib", function(done) {
    var _conf = require('./build/webpack.dll.config.js');
    webpack(_conf, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }

        gutil.log("[webpack_dll]", stats.toString({colors: true}));
        done();
    });
});

gulp.task('copy_lib', ["pack_lib"], function() {
    return gulp.src(jsFiles).pipe(gulp.dest('public/assets/js')).pipe(rename({suffix: '.min'})).pipe(uglify()).pipe(gulp.dest('public/assets/js'));
});

gulp.task("pack", ['copy_lib'], function(done) {
    var _conf = isDebug
        ? require('./build/webpack.dev.js')
        : require('./build/webpack.prod.js');

    webpack(_conf, function(err, stats) {
        if (err)
            throw new gutil.PluginError('webpack', err);
        gutil.log("[webpack]", stats.toString({colors: true}));
        done();
    });
});

gulp.task("pack_no_copy_lib", function(done) {
    var _conf = isDebug
        ? require('./build/webpack.dev.js')
        : require('./build/webpack.prod.js');

    webpack(_conf, function(err, stats) {
        if (err)
            throw new gutil.PluginError('webpack', err);
        gutil.log("[webpack]", stats.toString({colors: true}));
        done();
    });
});

gulp.task("watch", function() {
    gulp.watch('src/components/**/*.js', ['pack_no_copy_lib']);
    gulp.watch('public/stylesheets/*.scss', ['styles']);
});

gulp.task("release", ['vendor', 'styles', 'pack']);

gulp.task('default', ['vendor', 'styles', 'pack']);
