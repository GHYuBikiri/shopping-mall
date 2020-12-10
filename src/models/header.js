import Vue from 'vue';
import axios from '@/axios';
import {get,set} from '@/libs/cache';

async function catalog(index){
  if(typeof index!='number'||index<0){
    throw new Error('index invaild');
  }
  const name = `catalog${index}`;
  let data = get(name);
  if(data){return data}
  else{
    data = await axios('/catalog',{
      method: 'GET',
      params: {
        index,
      }
    });
    set(name,data,{ssession: true, maxage: 86400});
    return data;
  }
  
}

Vue.prototype.models=Vue.prototype.models||{};
Vue.prototype.models.header={catalog};