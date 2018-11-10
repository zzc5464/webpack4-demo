'use strict'
const utils = require('./utils')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  cssModules: isProduction ? {
    localIdentName: '[local]_[hash:base64:6]'
  } : {
    localIdentName: '[name]-[local]',
    camelCase: true
  },
  loaders: utils.cssLoaders({
    sourceMap: true,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
