'use strict'
const path = require('path')
// const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
/**
 * 插件 start
 */
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * 插件 end
 */
function resolve(src) {
  return path.join(__dirname,'..',src)
}

const prodWbpackConfig = merge( baseWebpackConfig ,{
  devtool: '#source-map',
  optimization: {
    minimizer: [ 
      new OptimizeCSSAssetsPlugin(), // 压缩 + 优化css代码 
    ],
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial" // 只打包初始时依赖的第三方
        },
        elementUI: {
          name: "chunk-elementUI", // 单独将 elementUI 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/]element-ui[\\/]/
        },
        commons: {
          name: "chunk-commons",
          test: resolve("src/components"), // 可自定义拓展你的规则
          minChunks: 2, // 最小共用次数
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
    
  },  
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "production"
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
    // webpack 4 的css代码压缩 contenthash 为了做文件缓存的，内容hash 不变就可以在网站请求的资源里缓存了
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      /**
      可能的错误 throw new Error('Cyclic dependency' + nodeRep
      循环引用依赖造成的，直接下载最新 alpha版本就可以了
      npm i --save-dev html-webpack-plugin@next
       */
      filename: 'index.html',
      template: 'index.html',
    }),
    // 注意一定要在HtmlWebpackPlugin之后引用
    // inline 的name 和你 runtimeChunk 的 name保持一致
    new ScriptExtHtmlWebpackPlugin({
      //`runtime` must same as runtimeChunk name. default is `runtime`
      inline: /runtime\..*\.js$/
    }),
    // new webpack.optimize.UglifyJsPlugin({ // 压缩代码
    //   compress: {
    //     warnings: false
    //   },
    //   parallel: true,
    //   sourceMap: true
    // }),
    new OptimizeCSSPlugin({ // 压缩css
      cssProcessorOptions: {
        safe: true
      }
    }),
    // new ExtractTextPlugin({ // 提取css样式文件出来
    //   filename: path.posix.join('static','css/[name].css?r=[contenthash]'),
    //   allChunks: true
    // }),
    new webpack.HashedModuleIdsPlugin(),// 生产环境打包出文件对应的哈希
    // new webpack.optimize.CommonsChunkPlugin({
    // // 将公共文件抽取出来，带来性能上的提升 4.0 已经移除
    //   name: 'vendor',
    //   minChunks: function (module) {
    //     // any required modules inside node_modules are extracted to vendor
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../static'),
    //     to: 'static',
    //     ignore: ['.*']
    //   }
    // ])
  ]
})

module.exports = prodWbpackConfig