const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base.js');

module.exports = {
  ... base,
  mode: "development", // "production" | "development" | "none"
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
 
  module: {
    rules: [
        ... base.module.rules,//继承再覆盖
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],//css-loader把css加载到x.js里，style-loader把css-loader加载到的东西放到head里面作为一个style标签
        //use: [MiniCssExtractPlugin.loader, 'css-loader']//二选一，上一个是作为style标签，这个是把css抽成文件,开发时用上面模式，不用生成文件更快
    },
    ],
  },
}

