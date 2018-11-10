const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./utils')
const path = require('path')
const vueLoaderConfig = require('./vue-loader.conf')
const config = require('../config')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function isDev() {
  return process.env.NODE_ENV === 'development' ? true : false
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: resolve('src/main.js'),
  output: {
    publicPath: isDev ? config.dev.publicPath: config.build.publicPath,
    path: resolve('dist'),
    filename: '[name].js'
  },
  optimization: {
    // 编译错的时候 webpack也不会退出
    noEmitOnErrors: true,
  },
  module: {
    rules: [
      ...utils.styleLoaders({ sourceMap: true, usePostCSS: true }),
      {
        test: /.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: vueLoaderConfig
          }
        ],
        include: [resolve('src')],
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // vue-loader v14 以上一定要引入这个插件
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  }
}