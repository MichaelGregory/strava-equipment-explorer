const LOCAL_STORAGE_KEY = 'strava-equipment-explorer'

const loadState = (store) => {
  let state = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  debugger
  if (!state) {
    return
  }

  store.replaceState(JSON.parse(state))
  return store
}

const storeState = (state) => {
  debugger
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
}

export { loadState, storeState }
