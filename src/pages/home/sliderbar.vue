<template>
  <div class="sliderbar">
    <div class="title">热销榜</div>
    <ul class="list">
      <li class="list-item clearfix" v-for="(item,index) in data" :key="index">
        <img class="icon" :src="item.src|imgurl" :alt="item.text">
        <span class="name" v-html="item.text">
        </span>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data(){
    return {
      data: null,
    }
  },
  async created(){
    let d1=await this.models.home.sidebar();
    this.data = d1.data.data;
  }
}
</script>

<style lang="css" scoped>

</style>