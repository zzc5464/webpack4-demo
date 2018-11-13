'use strict'

const ora = require('ora')
// const rm = require('rimraf')
// const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const spinner = ora('building for production...')
spinner.start()
const webpackConfig = require('./webpack.prod.conf')
webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  console.log(' ERROR ========> ');
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }
  console.log(' ========> ');
  
  spinner.stop()
  console.log(chalk.cyan('  Build complete.\n'))
})
