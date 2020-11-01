const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js", // string | object | array
  // 默认为 ./src
  // 这里应用程序开始执行
  // webpack 开始打包
 
  output: {
    // webpack 如何输出结果的相关选项
    path:path.resolve(__dirname, "dist"), // string (default)
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "index.[contenthash].js", // string (default)
    // entry chunk 的文件名模板
  },
  plugins: [
    new HtmlWebpackPlugin(//生成html
    {title: '哈哈哈哈',
    template: 'src/assets/index.html'//有模板以后，title用的就是模板里的title,不是哈哈哈哈
    }
  )
],
module: {
    rules: [
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']//把文件变成文件路径
    },
    {
        test: /\.styl$/,
        loader: ["style-loader" ,"css-loader","stylus-loader"]
    },
    {
        test: /\.less$/,
        loader: ["style-loader","css-loader","less-loader"] // compiles Less to CSS
    },
    {  
      test: /\.scss$/,    //支持引入scss
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点 第三步
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块 第二步
      }, {
          loader: "sass-loader", // 将 Sass 编译成 CSS 第一步
          options: {
            implementation: require('dart-sass')
          }
      }]
    }
]
  }
}

