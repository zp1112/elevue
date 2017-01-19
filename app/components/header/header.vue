<template>
  <div class="header">
    <!-- 内容相关 -->
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="seller-avatar" width="64"  height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="desc">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
          <span class="count">{{ seller.supports.length }}</span>
        </div>
      </div>
    </div>
    <!-- 公告相关 -->
    <div class="bulletin-wrapper">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  // 属性声明
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: ''
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../commons/stylus/mixin.styl';

.header
  color: #fff
  background: rgba(7, 17, 27, 0.5)
  blur: 10px

.content-wrapper
  padding: 24px 12px 18px 24px
  font-size: 0
  .avatar
    display: inline-block
    vertical-align: top
  .content
    display: inline-block
    font-size: 14px
    margin-left: 16px
    .title
      margin: 2px 0 8px 0
      .brand
        vertical-align: top
        width: 30px
        height: 18px
        display: inline-block
        bg-image('brand')
        background-size: 30px 18px
        background-repeat: no-repeat
      .name
        font-size: 16px
        line-height: 18px
        margin-left: 6px
        font-weight: bold
    .desc
      font-size: 12px
      line-height: 12px
      margin: 8px 0 10px 0
    .supports
      font-size: 10px
      line-height: 12px
      margin: 10px 0 2px 0
</style>
