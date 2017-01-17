// 这里我们除了引入 ‘webpack-hot-middleware/client’ 之外订阅了一个事件，当 event.action === ‘reload’ 时触发，而在 dev-server.js 中有发布的事件
const hotClient = require('webpack-hot-middleware/client');

// 订阅事件，当 event.action === 'reload' 时执行页面刷新
hotClient.subscribe((event) => {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
