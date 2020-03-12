import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
import Vuex from './view/store'

Vue.config.productionTip = false
console.log(77777,VueRouter)
new Vue({
  render: h => h(App),
  router:VueRouter,
  vuex:Vuex
}).$mount('#app')
