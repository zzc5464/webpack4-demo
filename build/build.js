'use strict'

const ora = require('ora')
// const rm = require('rimraf')
// const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const spinner = ora('building for build...')
spinner.start()
const webpackConfig = require('./webpack.prod.conf')
webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  spinner.stop()
  console.log(chalk.cyan('  Build complete.\n'))
})
