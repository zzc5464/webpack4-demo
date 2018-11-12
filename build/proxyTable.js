const remote = 'http://localhost:8008'

module.exports = {
  // 客户端上传的图片
  '/devapi': { // 监听所有 /api 开头的请求
    target: remote,
    secure: false, // 验证 SSL 证书
    changeOrigin:true,
    pathRewrite: {
      '^/devapi' : '' // 将请求代理到指定的服务器地址
    }
  }
}

// https://github.com/chimurai/http-proxy-middleware
