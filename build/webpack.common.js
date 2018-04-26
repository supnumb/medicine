const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDebug = (process.env.NODE_ENV === 'development');

const libPath = isDebug
    ? path.join(__dirname, './libs/debug/manifest.json')
    : path.join(__dirname, './libs/disk/manifest.json');

module.exports = {
    entry: {
        workspace: "./src/web/back.client.js",
    },
    plugins: [
        //new CleanWebpackPlugin(['../public/assets/js/']),
        new webpack.optimize.SplitChunksPlugin({name: 'common'}),

        new webpack.DllReferencePlugin({
            manifest: require(libPath),
            extensions: [".js", ".jsx"]
        }),

        new HtmlWebpackPlugin({
            title: "药师工作台",
            showErrors: true,
            inject: false,
            filename: "html/back.html",
            template: "./views/back_template.html",
            hash: true,
            chunks: ['cook']
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony'
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    output: {
        path: path.resolve(__dirname, '../public/assets/'),
        filename: 'js/[name].bundle.js'
    }
};
