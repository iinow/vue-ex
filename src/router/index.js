import Vue from 'vue'
import Router from 'vue-router'
import Component from '@/components/Component'
import Vuex1 from '@/components/Vuex1'
import Vuex2 from '@/components/Vuex2'
import Vuex3 from '@/components/Vuex3'
import Rxjs from '@/components/Rxjs'
import RouterVuex from '@/components/RouterVuex'
import Fragment from '@/components/Fragment'
import Meta from '@/components/Meta'
import Arguments from '@/components/Arguments'
import Constant from '@/components/Constant'
import AxiosVue from '@/components/AxiosVue'
import NotFoundExample1 from '@/components/NotFoundExample1'
import Nav from '@/components/Nav'
// import { store } from '../store'
// import { namepace as LoginNamespace } from '../store/login'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/vuex3',
      name: 'Vuex3',
      component: Vuex3
    },
    {
      path: '/routerVuex',
      name: 'RouterVuex',
      component: RouterVuex
    },
    {
      path: '/fragment',
      name: 'Fragment',
      component: Fragment
    },
    {
      path: '/meta',
      name: 'Meta',
      component: Meta
    },
    {
      path: '/argu',
      name: 'argu',
      component: Arguments
    },
    {
      path: '/cons',
      name: 'Constant',
      component: Constant
    },
    {
      path: '/axios',
      name: 'AxiosVue',
      component: AxiosVue
    },
    {
      path: '/notfound',
      name: 'NotFoundEx1',
      component: NotFoundExample1
    },
    {
      path: '/nav1',
      name: 'Nav1',
      component: Nav
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // fullPath 는 쿼리까지 포함한 path
//   console.log('fullPath: ', to.fullPath)

//   // path 는 쿼리 제외 path
//   console.log('Path: ', to.path)
//   const path = 'dd'
//   path.match(/[/]$/)

//   store.dispath(LoginNamespace, {country: 'kr'})

//   next({
//     path: to.path,
//     query: to.query
//   })
// })

export default router
