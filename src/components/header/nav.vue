<template>
  <nav>
    <ul class="catalog-href-list clearfix">
      <li @mouseover="cur=index" @mouseout="cur=-1" :class="['catalog-href','fl',{active:cur===index}]" v-for="(item,index) in catalog" :key="index">
        <a href="javascript:;" class="title">{{item}}</a>
      </li>
      <li class="catalog-href fl">
        <a href="javascript:;" class="title">为你严选</a>
      </li>
      <li class="catalog-href fl">
        <a href="javascript:;" class="title">众筹</a>
      </li>
    </ul>
    <div class="catalog-list" v-if="data">
      <ul class="clearfix">
        <li class="catalog-column fl"  
         v-for="(item,index) in data" :key="index">
          <div class="title">{{item.title}}</div>
          <div>
            <a v-for="(child,index2) in item.children" 
            :key="index2" :href="child.href" class="catalog-item">
              <img :src="child.src|imgurl" alt="">
              <span>{{child.title}}</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script type="text/javascript">
export default {
  data(){
    return {
      data:null,
      cur:0,
      catalog:['首页','居家生活','服饰鞋包','个户清理','母婴亲子','运动旅行',
      '数码家电','礼品特色']
    }
  },
  async created(){
    
  },
  watch: {
    async cur(){
      if(this.cur==-1){
        this.data = null
      }else{
        let _data = await this.models.header.catalog(this.cur)
        this.data = _data.data.data
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>