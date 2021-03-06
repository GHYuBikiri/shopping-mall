import axios from '@/axios';
import Vue from 'vue';

import {get,set} from '@/libs/cache';

async function banner(){
  let data=get('banner');
  if(data){
    return data;
  }else{
    data=await axios('/banners');
    set('banner',data,{session: true,maxage: 86400});
    return data;
  }
}

async function sidebar(){
  let data=get('sidebar');
  if(data){
    return data;
  }else{
    data=await axios('/sidebar');
    set('sidebar',data,{session: true,maxage: 86400});
    return data;
  }
}

Vue.prototype.models=Vue.prototype.models||{};
Vue.prototype.models.home = {banner,sidebar}