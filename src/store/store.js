import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 5
  },
  //   actions: { }
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
