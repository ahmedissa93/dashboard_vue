import Vue from 'vue'
import router from './router/Index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from "bootstrap-vue"

import App from './App'

import Default from './layouts/Wrappers/baseLayout.vue';
import Pages from './layouts/Wrappers/pagesLayout.vue';

Vue.config.productionTip = false;
const token = localStorage.getItem("token");
const token_type = localStorage.getItem("token_type");
Vue.prototype.$dashboardUrl = process.env.VUE_APP_DASHBOARD_API_URL;
console.log(process.env.VUE_APP_DASHBOARD_API_URL);
axios.defaults.headers.common['Authorization'] = token_type + " " +token;

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
// axios.Http.headers.common['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});