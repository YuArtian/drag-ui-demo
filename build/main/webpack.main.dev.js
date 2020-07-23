const path = require('path')
const {merge} = require('webpack-merge')
const BASE_CONFIG = require('./webpack.main.base')

/* main 开发环境配置 */
module.exports = merge(BASE_CONFIG, {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, '../../main/index.js'),
  output: {
    path: path.join(__dirname, '../../dist/main'),
    filename: 'main.dev.js'
  },
})