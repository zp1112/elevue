import Vue from 'vue';
import VueRouter from 'vue-router';
import Seller from './components/seller/seller';
import Ratings from './components/ratings/ratings';
import Goods from './components/goods/goods';
import App from './app';
import './commons/stylus/index';

// 如果在一个模块化工程中使用它,必须要通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter);

const routes = [
  { path: '/goods', component: Goods },
  { path: '/seller', component: Seller },
  { path: '/ratings', component: Ratings }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// linkActiveClass钩子,用active代替router-link-active的类名
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

/* eslint no-new: 0*/

new Vue({
  el: '#app',
  components: { App },
  router
});
router.push('/ratings');
