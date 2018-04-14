'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const pathResole = paths => path.resolve(__dirname, paths);

module.exports = {
    entry: './src/index.js',
    output: {
        path: pathResole('dist'),
        filename: '[name][hash:6].js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                use: ExtractText.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.(jpg|png|gif)$/i,
                loader: 'file-loader',
            }
        ]
    },
    resolve: {},
    devServer: {
        host: '192.168.1.121',
        open: true,
        hot: true
    },
    devtool: 'source-map',
    plugins: [
        new CleanPlugin(['dist']),
        new HtmlPlugin({
            minify: {
                collapseWhitespace: true
            },
            template: pathResole('index.html')
        }),
        new ExtractText('app.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
};