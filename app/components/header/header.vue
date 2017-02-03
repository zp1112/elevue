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
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
        <div class="support_count" v-if="seller.supports" @click="showDetail">
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <!-- 公告相关 -->
    <div class="bulletin_wrapper" @click="showDetail">
      <span class="bulletin_title"></span><span class="bulletin_text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <!-- clearfix -->
        <div class="detail_wrapper">
          <div class="detail_main">
            <h1 class="name">{{ seller.name }}</h1>
            <div class="star_wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="detail_title_wrapper">
              <span class="line"></span>
              <span class="text">优惠信息</span>
              <span class="line"></span>
            </div>
            <ul class="detail_supports" v-if="seller.supports">
              <li class="support_item" v-for="support in seller.supports">
                <span class="icon" :class="classMap[support.type]"></span>
                <span class="text">{{ support.description }}</span>
              </li>
            </ul>
            <div class="detail_bulletin_wrapper">
              <span class="line"></span>
              <span class="text">商家公告</span>
              <span class="line"></span>
            </div>
            <div class="detail_bulletin">
              {{ seller.bulletin }}
            </div>
          </div>
        </div>
        <div class="detail_close" @click="showDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import star from '../stars/stars';

export default {
  // 属性声明
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  data() {
    return {
      msg: '',
      detailShow: false
    };
  },
  components: {
    star
  },
  methods: {
    showDetail() {
      this.detailShow = !this.detailShow;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../commons/stylus/mixin.styl';

.header
  color: #fff
  background: rgba(7, 17, 27, 0.5)
  position: relative
  blur: 10px
  .content-wrapper
    padding: 24px 12px 18px 24px
    font-size: 0
    position: relative
    .avatar
      display: inline-block
      vertical-align: top
      img
        border-radius: 2px
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
        .icon
          vertical-align: top
          width: 12px
          height: 12px
          display: inline-block
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height: 12px
          font-size: 10px
    .support_count
      position: absolute
      height: 24px
      padding: 0 8px
      right: 12px
      bottom: 18px
      line-height: 24px
      font-weight: 200
      border-radius: 14px
      background: rgba(0,0,0,0.2)
      text-align: center
      .count
        font-size: 10px
      .icon-keyboard_arrow_right
        line-height: 24px
        font-size: 10px
        margin-left: 2px
  .bulletin_wrapper
    position: relative
    background-color: rgba(7, 17, 27, 0.2)
    height: 28px
    line-height: 28px
    padding: 0 22px 0 12px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    .bulletin_title
      vertical-align: top
      margin-top: 7px
      width: 22px
      height: 12px
      display: inline-block
      background-size: 22px 12px
      background-repeat: no-repeat
      bg-image('bulletin')
    .bulletin_text
      vertical-align: top
      font-size: 10px
      font-weight: 200
      line-height: 28px
      margin: 0 4px
    .icon-keyboard_arrow_right
      position: absolute
      font-size: 10px
      right: 12px
      top: 8px
  .background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1
    filter: blur(10px)
    background-color: rgba(7, 17, 27, 0.5)
    background-size: cover
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .detail
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 100
    overflow: auto
    background-color: rgba(7, 17, 27, 0.8)
    .detail_wrapper
      min-height: 100%
      overflow: auto
      .detail_main
        margin-top: 64px
        padding-bottom: 64px
        .name
          font-size: 16px
          font-weight: 700
          line-height: 16px
          text-align: center
        .star_wrapper
          text-align: center
          margin-top: 16px
          padding: 2px 0
        .detail_title_wrapper
          display: flex
          margin: 28px auto 24px auto
          width: 80%
          .line
            flex: 1
            position: relative
            top: -6px
            border-bottom: 2px solid rgba(255, 255, 255, 0.2)
          .text
            padding: 0 12px
            font-weight: 700
            font-size: 14px
        .detail_supports
          margin: 0 auto
          width: 80%
          .support_item
            padding: 0 12px
            margin-bottom: 12px
            font-size: 0
            &:last-child
              margin-bottom: 0
            .icon
              display: inline-block
              width: 16px
              height: 16px
              background-size: 16px 16px
              background-repeat: no-repeat
              margin-right: 6px
              vertical-align: top
              &.decrease
                bg-image('decrease_2')
              &.discount
                bg-image('discount_2')
              &.guarantee
                bg-image('guarantee_2')
              &.invoice
                bg-image('invoice_2')
              &.special
                bg-image('special_2')
            .text
              line-height: 16px
              font-size: 12px
              font-weight: 200
        .detail_bulletin_wrapper
          display: flex
          margin: 28px auto 24px auto
          width: 80%
          .line
            flex: 1
            position: relative
            top: -6px
            border-bottom: 2px solid rgba(255, 255, 255, 0.2)
          .text
            padding: 0 12px
            font-weight: 700
            font-size: 14px
        .detail_bulletin
          margin: 28px auto 24px auto
          width: 80%
          padding: 0 12px
          margin-top: 24px
          font-size: 12px
          font-weight: 200
          line-height: 24px
    .detail_close
      position: relative
      width: 32px
      height: 32px
      margin: -64px auto 0px auto
      font-size: 32px
      clear: both
      color: rgba(255, 255, 255, 0.5)
</style>
