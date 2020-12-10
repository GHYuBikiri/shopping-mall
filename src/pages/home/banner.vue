<template>
  <div class="banner" v-if="data">
    <a href="javascript:;" class="btn prev" @click="prev">上一项</a>
    <a href="javascript:;" class="btn next" @click="next">下一项</a>
    <ul class="banner-list">
      <li class="banner-container">
        <a :href="data[cur].href">
          <img :src="data[cur].src|imgurl">
        </a>
      </li>
    </ul>
    <ol class="number-list">
      <li :class="{active:cur===index}" v-for="(item,index) in data" :key="index" @click="cur=index"></li>
    </ol>
  </div>
</template>

<script type="text/javascript">

export default {
  data(){
    return {
      data: null,
      cur:0
    }
  },
  async created(){
    let d1 = await this.models.home.banner();
    this.data=d1.data.data;

  },
  methods:{
    prev(){
      this.cur--;
      if(this.cur==-1){
        this.cur=this.data.length-1
      }
    },
    next(){
      this.cur++;
      if(this.cur>=this.data.length){
        this.cur=0
      }
    }
  }
}
</script>

<style lang="css" scoped>
.br{
  
}
.fl{
  float:left;
}
</style>