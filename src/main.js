/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('VueSlider', VueSlider)

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
