# 笔记

## webpack基本配置起步

```shell
# 初始化 package.json
npm init -y
# 全局安装webpack 4 和 webpack-cli3
npm i webpack webpack-cli -g
# 创建必要的入口文件
touch entry.js
touch webpack.config.js
```

### webpack.config.js

```js
module.exports = {
    entry: '', // 入口文件地址
    output: { //  出口文件地址
        path: __dirname,
        filename: 'bunld.js'
    },
    module: {
        rules: [ // 解析文件的规则
            {
            	test: /.css$/,
                use: [{loader: 'style-loader'},{loader: 'css-loader'}]
        	}
        ]
    }
}
```

## web pack + vue配置

```shell
npm init -y
touch webpack.config.js
mkdir src
cd ./src
touch main.js
touch App.vue
```



## err log

1. Error: Cannot find module 'webpack/lib/RuleSet'
   - 全局安装webpack导致的

> 解决办法: 本地安装webpack打包即可  [link](https://blog.csdn.net/dcxia89/article/details/79073426)

2. Vue-loader 打包失败
   - 少安装依赖包 `npm i vue-template-compiler -D` 