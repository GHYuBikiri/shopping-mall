import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './axios'

import './assets/css/base.css'
import './components';
import './models';
import './filters';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  render: h => h(App),
}).$mount('#app')
