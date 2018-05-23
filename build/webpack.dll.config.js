const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const isDebug = process.env.NODE_ENV === 'development';
const outputPath = isDebug
    ? path.join(__dirname, './libs/debug')
    : path.join(__dirname, './libs/disk');

const lib = [
    'react',
    'react-dom',
    'react-router-dom',
    'redux',
    'redux-thunk',
    'moment',
    'form-lib',
    'rsuite-schema',
    'react-bootstrap-typeahead',
    'prop-types',
    'rsuite',
    'rsuite-utils'
];

module.exports = {
    mode: isDebug
        ? "development"
        : "production",
    // devtool: '#source-map',
    entry: {
        lib: lib
    },
    output: {
        path: outputPath,
        filename: '[name].js',
        /**
         * output.library
         * 将会定义为 window.${output.library}
         * 在这次的例子中，将会定义为`window.vendor_library`
         */
        library: '[name]',
        // libraryTarget: 'umd',
        // umdNamedDefine: true
    },
    plugins: [
        new CleanWebpackPlugin([outputPath]),

        new webpack.DllPlugin({
            path: path.join(outputPath, './manifest.json'),
            name: '[name]'
        }),
        new UglifyJSPlugin()
    ]
};
