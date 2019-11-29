import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    [login.namepace]: {
      ...login,
      namespaced: true
    }
  },
  state: {
    counter: 5
  },
  getters: {
    doubleCounter: function (state) {
      return state.counter * 2
    },
    getCounter: function (state) {
      return state.counter
    }
  },
  mutations: {
    addCounter: function (state, payload) {
      return state.counter++
    }
  },
  actions: {
    addCounter: function (context) {
      return context.commit('addCounter')
    }
  }
})
