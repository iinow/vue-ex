// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import { sync } from 'vuex-router-sync'
import { Plugin } from 'vue-fragment'
import VueMeta from 'vue-meta'
import './global'

const domain = document.domain
const is = (domain.indexOf('toast.com') !== -1)
console.log(is, domain.indexOf('toast.com'))

Vue.config.productionTip = false

sync(store, router)
Vue.use(Plugin)
Vue.use(VueMeta, {
  // refreshOnceOnNavigation: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
