<template>
  <div class="tabs">
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 点击link会刷新router-view -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {
      msg: '我是 Header!'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../commons/stylus/mixin";

.tabs .tab
  display: flex
  width: 100%
  line-height: 40px
  height: 40px
  // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex: 1
    text-align: center
    // & 表示父元素 & > a表示父元素下面的a标签
    & > a
      display: block
      color: rgb(77, 85, 93)
      font-size: 20px
      line-height: 28px
      &.active
        color: rgb(240, 20, 20)


</style>
