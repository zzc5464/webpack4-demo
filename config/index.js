const path = require('path')
const build = {
  publicPath: path.join(__dirname,'../dist')
}
const dev = {
  publicPath: '/'
}
console.log(build,dev);

module.exports =  {
  build,
  dev
}