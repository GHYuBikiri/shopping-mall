import Vue from 'vue'
import {ROOT,API_KEY} from '@/config';

Vue.filter('imgurl',function (url){
  return ROOT+'/'+url+'?apikey='+API_KEY
})