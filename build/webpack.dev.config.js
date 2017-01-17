// 为了不去修改webpack.config.js，在build目录下新建一个webpack.dev.conf.js文件，意思是开发模式下要读取的配置文件，并写入一下内容
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
// 引入基本配置
const config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
  // 添加三个插件
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../app/index.html'),
    inject: true
  })
];

// 动态向入口配置中注入 webpack-hot-middleware/client
// const devClient = 'webpack-hot-middleware/client';
const devClient = './build/dev-client';
const extras = [devClient];
config.entry = extras.concat(config.entry);
// Object.keys(config.entry).forEach((name) => {
//   const extras = [devClient];
//   config.entry = extras.concat(config.entry[name]);
// });

module.exports = config;
