<template>
  <div>
    <site-header />
    <div class="list-bg">
      <div class="page">
        <crumbs />
        <div class="item-list-container">
          <div class="filter clearfix">
            <span class="name fl">分类：</span>
            <a href="#" class="fl">居家生活</a>
            <a href="#" class="fl">母婴亲子</a>
            <a href="#" class="fl">全球特色</a>
            <a href="#" class="fl">数码家电</a>
            <a href="#" class="fl">运动旅行</a>
          </div>
          <ul class="item-list clearfix">
            <net-item v-for="(item,index) in data" :key="index" :data="item"/>
          </ul>
          <div class="pagenation-container">
            <div class="pagenation clearfix">
              <a href="#" class="fl large disabled">上一页</a>
              <a href="#" class="fl active">1</a>
              <a href="#" class="fl">2</a>
              <a href="#" class="fl large">下一页</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import '@/assets/css/list.css'
import netItem from './item'

export default {
  components:{netItem},
  data(){
    return {
      data:null,
      pagecount: 0
    }
  },
  watch: {
    '$route.params.kw': {
      async handler(){
        let d1=await this.models.list.search(this.$route.params.kw);
        const {list,pagecount}=d1.data.data;
        this.data = list;
        this.pagecount = pagecount;
      },
      immediate:true
    }
  }
}
</script>

<style lang="css" scoped>

</style>