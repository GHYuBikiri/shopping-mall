<template>
  <div>
    <span class="loading" v-if="loading">loading</span>
    <router-view />
  </div>
</template>

<script type="text/javascript">
import ev from '@/libs/events';
export default {
  data(){
    return {
      loading: false,
    }
  },
  created(){
    ev.on('axios_start_loading',()=>this.loading=true);
    ev.on('axios_end_loading',()=>this.loading=false);
  },
}
</script>

<style lang="css" scoped>
.loading{position:fixed;width:100%;height:100%;background:rgba(0,0,0,.3);
left:0;top:0;color:#FFF;text-align: center;line-height: 400px;z-index:9999;}
</style>