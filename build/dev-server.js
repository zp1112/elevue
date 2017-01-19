// 引入必要的模块
import express from 'express';
import webpack from 'webpack';
import appData from '../data.json';

const config = process.env.NODE_ENV === 'production' ? require('./webpack.config') : require('./webpack.config.dev');

// 创建一个express实例
const app = express();
// hot模式下对应index.html在/下面
app.use('/static', express.static('./static'));
// 调用webpack并把配置传递过去
const compiler = webpack(config);

// 使用 webpack-dev-middleware 中间件
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});
// 使用 webpack-hot-middleware 中间件
const hotMiddleware = require('webpack-hot-middleware')(compiler);
// webpack插件，监听html文件改变事件
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        // 发布事件
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

// 注册开发环境中间件
app.use(devMiddleware);
// 注册热加载中间件
app.use(hotMiddleware);

const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;

const router = express.Router();
router.get('/seller', (req, res) => {
  res.json({
    errno: 0,
    data: seller
  });
});
router.get('/goods', (req, res) => {
  res.json({
    errno: 0,
    data: goods
  });
});
router.get('/rating', (req, res) => {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use('/api', router);
// 监听 8888端口，开启服务器
app.listen(8888, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8888');
});
