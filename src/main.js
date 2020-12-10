import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './axios'

import './assets/css/base.css'
import './components';
import './models';
import './filters';

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  render: h => h(App),
}).$mount('#app')
