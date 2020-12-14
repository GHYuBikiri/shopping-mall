<template>
  <li class="item-item fl">
    <div class="img-container">
      <img :src="data.img1|imgurl" alt="" class="img">
      <img :src="data.img2|imgurl" alt="" class="img flop">
    </div>
    <div class="bd">
      <a href="#" class="title">{{data.title}}</a>
      <div class="price">
        <span class="true-price">￥{{data.price}}</span>
        <!-- <span class="old-price">￥59</span> -->
      </div>
      <a href="#" class="add-cart">加入购物车</a>
    </div>
  </li>
</template>

<script type="text/javascript">
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>

</style>