/**
 * User: luozhong
 * Date: 17/3/7
 * Time: 11:56
 * email:luozhong0521@163.com
 */
let webpack = require('webpack');
let path = require("path");
let glob = require('glob');

let commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * 入口函数
 * @return { fileName : path }
 */
let entries= function () {
    let jsDir = glob.sync('./app/*/*.js');
    console.log("--------------");
    console.log(jsDir);
    let map = {};
    for (let i = 0; i < jsDir.length; i++) {
        let filePath = jsDir[i];
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }
    return map;
};

module.exports = {
    // entry: entries(),
    entry: {
        app: './app/main.js'
    },
    output: {
        path: __dirname,
        filename: 'bundle/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // loader: "babel-loader!language-translate-loader",
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test:/\.vue/,//放到vue-loader的后面 等到首次编译完成后拿到编辑结果再去转换
                exclude: /node_modules/,
                loader: 'language-translate-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    plugins: [new ExtractTextPlugin("[name].css")],
    devServer: {
        contentBase: "./app",
        port: 9000
    }
};
