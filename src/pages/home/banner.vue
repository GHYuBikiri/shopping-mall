<template>
  <div class="banner">
    <a href="javascript:;" class="btn prev">上一项</a>
    <a href="javascript:;" class="btn next">下一项</a>
    <ul class="banner-list">
      <li class="banner-container">
        <a href="http://you.163.com/">
          <img src="imgs/banner1.jpg">
        </a>
      </li>
    </ul>
    <ol class="number-list">
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>

<script type="text/javascript">
export default {
  async created(){
    let data=await this.models.home.banner();
  }
}
</script>

<style lang="css" scoped>

</style>