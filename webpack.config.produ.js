const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base.js');

module.exports = {
  ... base,
  mode: "production", // "production" | "development" | "none"
  
  plugins: [
    ... base.plugins,
  new MiniCssExtractPlugin({//抽成css文件的插件，开发者模式不需要，部署时需要
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
  }),
],
 
  module: {
    rules: [
      ... base.module.rules,//继承再覆盖
      {
        test: /\.css$/i,
        //use: ['style-loader', 'css-loader'],//css-loader把css加载到x.js里，style-loader把css-loader加载到的东西放到head里面作为一个style标签
        use: [MiniCssExtractPlugin.loader, 'css-loader']//二选一，上一个是作为style标签，这个是把css-loader加载到到的东西抽成css文件
    },
    ],
  },
}

