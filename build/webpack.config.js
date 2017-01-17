// nodejs 中的path模块
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
  entry: [path.resolve(__dirname, '../app/index.js')],
    // 输出配置
  output: {
        // 输出路径是 myProject/output/static
    path: path.resolve(__dirname, '../output/static'),
    // publicPath表示index.html页面中引用的静态文件路径，pro环境下该文件存在static/目录下，hot-dev环境该文件存在/目录下
    publicPath: 'static/',
    // publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    // only lint local *.vue files
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    // but use vue-loader for all *.vue files
    loaders: [
      // 使用vue-loader 加载 .vue 结尾的文件
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename 表示访问路径，dev-hot则在http://localhost:8888/index.html,否则就是相对static下的文件
      filename: '../index.html',
      // filename: 'index.html',
      template: path.resolve(__dirname, '../app/index.html'),
      inject: true
    })
  ]
};
