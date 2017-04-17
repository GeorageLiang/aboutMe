/**
 * Created by Administrator on 2016/12/15.
 */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./common.js",
    output: {
        filename: "build/build.js"
    },
    module: {
        loaders: [
            { test: /\.jade$/, loader: "jade" },
            //.css �ļ�ʹ�� style-loader �� css-loader ������

            { test: /\.scss$/,  loader: ExtractTextPlugin.extract('style', 'css!sass') },
            {
                test: /\.(png|jpg|OTF)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            //.js �ļ�ʹ�� jsx-loader �����봦��
            {   test: /\.js$/,
                loader: 'babel',
                include: [
                    // ֻȥ��������Ŀ¼�µ� src �� demo �ļ���
                    path.join(process.cwd(), './js')
                ],
                query: {
                    presets: ['es2015']
                }
            }
            //{ test: /\.js$/,    loader: "jsx-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js','.jade','.scss']
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new HtmlWebpackPlugin({filename: 'index.html',template:'template/index1.jade'})
    ]
};