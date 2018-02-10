import { storeState } from '../../utils/state'

const types = {
  SetAuthentication: 'authentication/setAuthentication'
}

const state = {
  authentication: null
}

const mutations = {
  setAuthentication (state, payload) {
    state = payload
    // storeState(state)
    debugger
    return state
  }
}

const actions = {
  setAuthentication (context, payload) {
    debugger
    return context.commit(types.SetAuthentication, payload)
  }
}

const getters = {}

const authentication = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export { types }

export default authentication
