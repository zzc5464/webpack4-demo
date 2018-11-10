const path = require('path')
const build = {
  publicPath: path.join(__dirname,'../dist')
}
const dev = {
  publicPath: '/',
  cssSourceMap: false
}
module.exports =  {
  build,
  dev
}