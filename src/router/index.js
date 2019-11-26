import Vue from 'vue'
import Router from 'vue-router'
import Component from '@/components/Component'
import Vuex1 from '@/components/Vuex1'
import Vuex2 from '@/components/Vuex2'
import Rxjs from '@/components/Rxjs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vuex1',
      name: 'Vuex1',
      component: Vuex1
    },
    {
      path: '/vuex2',
      name: 'Vuex2',
      component: Vuex2
    },
    {
      path: '/compo',
      name: 'Component',
      component: Component
    },
    {
      path: '/rxjs',
      name: 'Rxjs',
      component: Rxjs
    }
  ]
})
