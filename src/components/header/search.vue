<template>
  <div class="search-container fr">
    <input type="text" class="search-txt fl" v-model="kw">
    <div class="suggest" v-if="data">
      <ul>
        <li v-for="(item,index) in data" :key="index">{{item}}</li>
      </ul>
    </div>
    <a href="javascript:;" class="search-btn fl" @click="search">搜索</a>
    <i class="icon"></i>
    <i class="placeholder" v-if="!kw">张一山同款 开衫体恤</i>
    <div class="keyword-list clearfix">
      <a href="javascript:;" class="fl">运动装备 7.5折起</a>
      <a href="javascript:;" class="fl">蚕丝被 431元起</a>
      <a href="javascript:;" class="fl">补水 保湿</a>
      <a href="javascript:;" class="nbr fl">抗皱家居服</a>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data(){
    return {
      kw: '',
      data: null,
    }
  },
  methods: {
    search(){
      this.$router.push({name: 'search',params: {kw:this.kw}})
    }
  },
/*   computed: {
    kw: {
      get(){
        return this.$route.params.kw;
      },
      set(){
        this.$router.push({name: 'search',params: {kw:this.kw}})
      }
    }
  }, */
  watch: {
    async kw(){
      if(this.kw){
        let d1 = await this.models.header.searchautocomplete(this.kw)
        this.data = d1.data.data
      }else{
        this.data=null
      }
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>