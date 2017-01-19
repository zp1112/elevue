<template>
  <div class="app">
    <!-- 将seller对象属性传给header的seller属性 -->
    <apphead :seller="seller"></apphead>
    <tab></tab>
  </div>
</template>

<script>
import axios from 'axios';
import Apphead from 'components/header/header';
import Tab from './components/tab/tab';

export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    // 获取到的数据data经过vue自动加上了一些getter，setter方法，用于监听dom数据更改
    axios.get('/api/seller').then((response) => {
      console.log(response);
      const ERR_OK = 0;
      if (response.data.errno === ERR_OK) {
        this.seller = response.data.data;
      }
    }).catch((err) => {
      console.log(err);
    });
  },
  components: {
    Apphead,
    Tab
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './commons/stylus/icon.styl'

h1 {
  color: #42b983;
}
</style>
