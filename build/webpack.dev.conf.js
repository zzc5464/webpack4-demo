const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf');
const devConfig = merge(baseWebpackConfig,{
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8002,
    // contentBase: path.join(__dirname, 'dist'), // 服务器使用的文件，一般是dist目录
    // hot: true,
    open: true,
    // overlay:{ // 在浏览器展示错误日志
    //   errors:true,
    //   warnings:false
    // },
    // quite: true // true，则终端输出的只有初始启动信息。 webpack 的警告和错误是不输出到终端的。
    // host: "0.0.0.0",
    // publicPath: "/dist",
    // historyApiFallback: true,
    // disableHostCheck: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../template.html'),
      filename: 'index.html'
    }), // 根据模版生成index文件
  ]
})
module.exports = devConfig