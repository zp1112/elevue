<template>
  <div class="star" :class="starType">
    <span class="star_item" v-for="itemClass in itemClasses" :class="itemClass"></span>
  </div>
</template>

<script type="text/ecmascript-6">
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';

export default {
  // 属性声明
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return `star_${this.size}`;
    },
    itemClasses() {
      const score = Math.floor(this.score * 2) / 2;
      const scoreDecimal = score % 1 !== 0;
      const integer = Math.floor(this.score);
      const result = [];
      for (let i = 0; i < integer; i += 1) {
        result.push(CLS_ON);
      }
      if (scoreDecimal) {
        result.push(CLS_OFF);
      }
      for (let i = integer; i < LENGTH; i += 1) {
        result.push(CLS_HALF);
      }
      return result;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../commons/stylus/mixin.styl';
.star
  .star_item
    display: inline-block
    background-repeat: no-repeat
  &.star_48
    .star_item
      margin-right: 22px
      width: 20px
      height: 20px
      background-size: 20px 20px
      &:last-child
        margin-right: 0
      &.on
        bg-image('star48_on')
      &.off
        bg-image('star48_off')
      &.half
        bg-image('star48_half')
  &.star_36
    .star_item
      margin-right: 16px
      width: 15px
      height: 15px
      background-size: 15px 15px
      &:last-child
        margin-right: 0
      &.on
        bg-image('star36_on')
      &.off
        bg-image('star36_off')
      &.half
        bg-image('star36_half')
  &.star_24
    .star_item
      margin-right: 3px
      width: 10px
      height: 10px
      background-size: 10px 10px
      &:last-child
        margin-right: 0
      &.on
        bg-image('star24_on')
      &.off
        bg-image('star24_off')
      &.half
        bg-image('star24_half')
</style>
