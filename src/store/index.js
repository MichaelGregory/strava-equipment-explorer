import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const LOCAL_STORAGE_KEY = 'strava-equipment-explorer'

function storeState (state) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
}

function loadState (store) {
  let state = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  if (!state) {
    return
  }

  store.replaceState(JSON.parse(state))
  return store
}

const store = new Vuex.Store({
  state: {
    count: 0,
    athlete: null
  },
  mutations: {
    increment (state, payload) {
      let count = state.count + payload.amount
      state.count = count
      storeState(state)
      return count
    },
    decrement (state, payload) {
      let count = state.count - payload.amount
      if (count > 0) {
        count = 0
      }
      state.count = count
      storeState(state)
      return count
    },
    setAthlete (state, payload) {
      let {athlete} = payload
      state.athlete = athlete
      storeState(state)
      return athlete
    },
    setAuthenticated (state, payload) {
      let {authenticated} = payload
      state.authenticated = authenticated
      storeState(state)
      return authenticated
    }
  },
  actions: {
    increment (context, payload) {
      context.commit('increment', payload)
    },
    decrement (context, payload) {
      context.commit('decrement', payload)
    },
    setAthlete (context, payload) {
      context.commit('setAthlete', payload)
    },
    setAuthenticated (context, payload) {
      context.commit('setAuthenticated', payload)
    }
  }
})
export default store
export {store, loadState}
