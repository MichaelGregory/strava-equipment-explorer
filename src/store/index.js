import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload) {
      let count = state.count + payload.amount
      state.count = count
      return count
    },
    decrement (state, payload) {
      let count = state.count - payload.amount
      if (count > 0) {
        count = 0
      }
      state.count = count
      return count
    }
  },
  actions: {
    increment (context, payload) {
      context.commit('increment', payload)
    },
    decrement (context, payload) {
      context.commit('decrement', payload)
    }
  }
})
export default store
