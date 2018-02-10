import Vue from 'vue'
import Vuex from 'vuex'
import { loadState, storeState } from '../utils/state'
import athlete from './modules/athlete'
import authentication from './modules/authentication'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    athlete,
    authentication
  },
  state: {
    count: 0
  }
})

export default store
export {store, loadState, storeState}
