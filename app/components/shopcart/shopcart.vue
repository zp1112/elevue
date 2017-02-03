<template>
  <div class="shopcart">
    <div class="bottom">
      <div class="left">
        <span class="out_cir">
          <span class="inner_cir" :class="{'blue': totalPrice > 0}">
            <i class="icon-shopping_cart"></i>
          </span>
          <span class="shopcount" v-show="shopCount > 0">
            {{ shopCount }}
          </span>
        </span>
        <span class="total">
          ￥{{ totalPrice }}
        </span>
        <span class="line border-1px"></span>
        <span class="extra border-1px">另需配送费￥{{ deliveryPrice }}元</span>
      </div>
      <div class="right" :class="green">
        <div class="min">{{ enough }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    selectedFoods: {
      type: Array,
      default() {
        return [{
          price: 10,
          count: 3
        }];
      }
    }
  },
  data() {
    return {
      total: 0,
      shopcount: 0
    };
  },
  computed: {
    shopCount() {
      let count = 0;
      this.selectedFoods.forEach((food) => {
        count += food.count;
      });
      return count;
    },
    totalPrice() {
      let total = 0;
      this.selectedFoods.forEach((food) => {
        total += food.price * food.count;
      });
      return total;
    },
    enough() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice - this.minPrice > 0) {
        return '去结算';
      }
      return `还差￥${this.minPrice - this.totalPrice}元起送`;
    },
    green() {
      if (this.totalPrice - this.minPrice > 0) {
        return 'green';
      }
      return 'gray';
    }
  },
  methods: {
    add(name, price) {
      if (!this.count[name]) {
        this.$set(this.count, name, 1);
      } else {
        this.$set(this.count, name, this.count[name] + 1);
      }
      this.total = this.total + price;
      this.shopcount = this.shopcount + 1;
      console.log(this.total);
    },
    dec(name, price) {
      if (!this.count[name]) {
        this.$set(this.count, name, 0);
      } else {
        this.$set(this.count, name, this.count[name] - 1);
        this.total = this.total - price;
        this.shopcount = this.shopcount - 1;
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../commons/stylus/mixin.styl';
.shopcart
  .bottom
    position: fixed
    background: #141d27
    height: 50px
    width: 100%
    left: 0
    bottom: 0
    display: flex
    color: rgba(255, 255, 255, 0.4)
    .left
      flex: 1
      .out_cir
        width: 44px
        height: 44px
        border-radius: 50%
        background: #141d27
        top: -12px
        margin: 0 12px
        padding: 6px
        position: relative
        display: inline-block
        .inner_cir
          display: inline-block
          width: 100%
          height: 100%
          background: rgba(255, 255, 255, 0.2)
          border-radius: 50%
          text-align: center
          .icon-shopping_cart
            line-height: 44px
            font-size: 24px
        .blue
          background: rgb(0, 160, 220)
        .shopcount
          position: absolute
          min-width: 20px
          right: 0
          top: -2px
          background: red
          border-radius: 16px
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4)
          text-align: center
          padding: 4px
          color: #fff
          font-size: 9px
          font-weight: 700
          line-height: 16px
      .total
        display: inline-block
        font-size: 16px
        vertical-align: top
        margin-top: 12px
        border-right: 1px solid rgba(255, 255, 255, 0.1)
        line-height: 24px
        font-weight: 700
        padding-right: 12px
      .extra
        display: inline-block
        vertical-align: top
        margin: 12px 0 0 12px
        line-height: 24px
        font-size: 10px
  .right
    width: 105px
    flex: 0 0 105px
    &.green
      background: #00b43c
    &.gray
      background: #2b333c
    .min
      text-align: center
      height: 48px
      font-weight: 700
      line-height: 48px
      font-size: 12px


</style>
