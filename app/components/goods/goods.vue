<template>
  <div class="goods">
    <div class="menu_wrapper">
      <ul>
        <li v-for="good in goods" class="menu_item">
          <span class="icon" v-show="good.type > 0" :class="classMap[good.type]"></span>
          <span class="text border-1px">
            {{ good.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods_wrapper">
      <ul>
        <li class="food_list" v-for="good in goods">
          <h1 class="title">{{ good.name }}</h1>
          <ul>
            <li v-for="food in good.foods" class="food_item border-1px">
              <div class="icon">
                <img :src="food.icon" width="57px" height="57px">
              </div>
              <div class="content">
                <h2 class="subname">{{ food.name }}</h2>
                <p class="description">{{ food.description }}</p>
                <div class="extras">
                  <span class="sell_count">月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{ food.price }}</span>
                  <span v-show="food.oldPrice" class="old">￥{{ food.oldPrice }}</span>
                </div>
              </div>
              <div class="addicon">
                <span class="dec" @click="dec(food.name)" v-show="count[food.name] > 0">
                  <i class="icon-remove_circle_outline"></i>
                </span>
                <span class="count" v-show="count[food.name] > 0">
                  {{ count[food.name] }}
                </span>
                <span class="add" @click="add(food.name)">
                  <i class="icon-add_circle"></i>
                </span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
</template>

<script>
import axios from 'axios';
import shopcart from '../shopcart/shopcart';

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      count: {}
    };
  },
  methods: {
    add(name) {
      if (!this.count[name]) {
        this.$set(this.count, name, 1);
      } else {
        this.$set(this.count, name, this.count[name] + 1);
      }
    },
    selectedFoods(name, action) {
      // const foods = [];
      if (action === 'add') {
        if (!this.count[name]) {
          this.$set(this.count, name, 1);
        } else {
          this.$set(this.count, name, this.count[name] + 1);
        }
        // foods.push({
        //   price
        // })
      }
    },
    dec(name) {
      if (!this.count[name]) {
        this.$set(this.count, name, 0);
      } else {
        this.$set(this.count, name, this.count[name] - 1);
      }
    }
  },
  created() {
    // 获取到的数据data经过vue自动加上了一些getter，setter方法，用于监听dom数据更改
    axios.get('/api/goods').then((response) => {
      console.log(response);
      const ERR_OK = 0;
      if (response.data.errno === ERR_OK) {
        this.goods = response.data.data;
      }
    }).catch((err) => {
      console.log(err);
    });
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components: {
    shopcart
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../commons/stylus/mixin.styl';

.goods
  display: flex
  position: absolute
  width: 100%
  top: 174px
  bottom: 50px
  .menu_wrapper
    flex: 0 0 80px
    width: 80px
    background: #f3f5f7
    .menu_item
      display: table
      height: 54px
      width: 56px
      padding: 0 12px
      .icon
        vertical-align: top
        width: 12px
        height: 12px
        display: inline-block
        background-size: 12px 12px
        background-repeat: no-repeat
        margin-right: 2px
        &.decrease
          bg-image('decrease_3')
        &.discount
          bg-image('discount_3')
        &.guarantee
          bg-image('guarantee_3')
        &.invoice
          bg-image('invoice_3')
        &.special
          bg-image('special_3')
      .text
        display: table-cell
        // vertical-align: middle
        font-size: 12px
        font-weight: 200
        line-height: 14px
        vertical-align: top
        border-1px(rgba(7, 17, 27, 0.1))
  .foods_wrapper
    flex: 1
    .food_list
      .title
        padding-left: 14px
        height: 26px
        border-left: 2px solid #d9dde1
        background: #f3f5f7
        color: rgb(147, 153, 159)
        font-size: 12px
        line-height: 26px
      .food_item
        display: flex
        padding: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        position: relative
        &:last-child
          border-none()
        .icon
          flex: 0 0 57px
          width: 57px
          margin-right: 10px
        .content
          .subname
            font-size: 14px
            color: rgb(7, 17, 27)
            line-height: 14px
            margin: 2px 0 8px 0
          .description, .extras
            color: rgb(147, 153, 159)
            font-size: 10px
          .description
            margin-bottom: 8px
          .extras
            line-height: 10px
            .sell_count
              padding-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              font-size: 10px
              color: rgb(147, 157, 159)
              text-decoration: line-through
        .addicon
          position: absolute
          right: 18px
          bottom: 18px
          display: flex
          .add, .dec
            flex: 1
            display: inline-block
            width: 24px
            height: 24px
            line-height: 24px
            font-size: 24px
          .add
            margin-left: 12px
            .icon-add_circle
              color: rgb(0, 160, 220)
          .dec
            margin-right: 12px
            .icon-remove_circle_outline
              color: rgb(0, 160, 220)
          .count
            flex: 1
            font-size: 10px
            line-height: 24px
            color: rgb(0, 160, 220)
</style>
