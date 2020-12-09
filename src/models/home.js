import axios from '@/axios';
import Vue from 'vue';

async function banner(){
  return await axios('/banners');
}

async function sliderbar(){
  return await axios('/sidebar')
}

Vue.prototype.models=Vue.models||{};
Vue.prototype.models.home = {banner,sidebar}
