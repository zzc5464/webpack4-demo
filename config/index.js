const path = require('path')
const build = {
  assetsPublicPath: '/dist/',
  publicPath: '', // 加载外部资源的路径
}
const dev = {
  publicPath: '/',
  cssSourceMap: false
}
module.exports =  {
  build,
  dev
}