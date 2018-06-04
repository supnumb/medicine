const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, '../public/assets/'),
        filename: 'js/[name].bundle.js',
        publicPath: 'http://erp.mxkn.cn:8080/assets/'
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        new UglifyJSPlugin()
    ]
});
