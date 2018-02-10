import { storeState } from '../../utils/state'

const types = {
  SetAthlete: 'setAthlete'
}

const state = {
  authentication: null,
  mjg: true
}

const mutations = {
  setAthlete (state, payload) {
    let {athlete} = payload
    debugger
    state = athlete
    // storeState(state)
    return athlete
  }
}

const actions = {
  setAthlete (context, payload) {
    debugger
    context.commit(types.SetAthlete, payload)
  }
}

const getters = {
  bikeCount: state => {
    if (!state) {
      return 0
    }
    return state.athlete ? state.athlete.bikes.length : 0
  },
  bikeDistance: (state) => {
    if (!state) {
      return 0
    }
    let { athlete } = state
    if (!athlete) {
      return 0
    }
    return athlete.bikes.reduce((sum, bike) => sum + bike.distance, 0)
  }
}

// export const athlete = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.
  // namespaced: true,
  // getters: {
  //   myModularizedNumber: state => state.myModularizedNumber
  // },
// }

const athlete = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export { types }

export default athlete
