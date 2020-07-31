import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';
import VueNumber from 'vue-number-animation'
import router from "./router";
import './assets/fontawesome/css/all.css'


Vue.config.productionTip = false

Vue.use(VueNumber)
Vue.use(VueCarousel);
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
