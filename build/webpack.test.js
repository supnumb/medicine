'use strict'

/**
 * 打包react源代码，到可以被前端引用 
 * 
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        contentBase: path.resolve(__dirname, '../public/')
    },
    output: {
        path: path.resolve(__dirname, '../public/assets/'),
        filename: 'js/[name].bundle.js',
        publicPath: 'http://erp.mxkn.cn:8080/assets/'
    }
});
