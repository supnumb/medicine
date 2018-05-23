const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDebug = (process.env.NODE_ENV === 'development');
// var DashboardPlugin = require('webpack-dashboard/plugin');

const libPath = isDebug
    ? path.join(__dirname, './libs/debug/manifest.json')
    : path.join(__dirname, './libs/disk/manifest.json');

module.exports = {

    entry: {
        workspace: "./src/web/back.client.js",
        signin: "./src/web/signin.client.js",
    },

    plugins: [
        //new CleanWebpackPlugin(['../public/assets/js/']),
        new webpack.optimize.SplitChunksPlugin({ name: 'common' }),

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
            chunks: ['workspace']
        }),

        new HtmlWebpackPlugin({
            title: "药师工作台",
            showErrors: true,
            inject: false,
            filename: "html/employee_signin.html",
            template: "./views/back_template.html",
            hash: true,
            chunks: ['signin']
        }),

        // new DashboardPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.jsx$/,
                loader: 'react-hot-loader!babel-loader!jsx-loader?harmony',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }, {
                test: /\.less$/,
                use: [
                    'style-loader', {
                        loader: 'css-loader', options: { importLoaders: 1 }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }

                ]
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
        filename: 'js/[name].bundle.js',
        publicPath: 'http://localhost:8080/assets/'
    }
};
