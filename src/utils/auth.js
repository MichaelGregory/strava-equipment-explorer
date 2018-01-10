const ID_TOKEN_KEY = 'id_token'
const ACCESS_TOKEN_KEY = 'access_token'
// const CLIENT_ID = '{AUTH0_CLIENT_ID}'
// const CLIENT_DOMAIN = '{AUTH0_DOMAIN}'
// const REDIRECT = 'YOUR_CALLBACK_URL'
// const SCOPE = '{SCOPE}'
// const AUDIENCE = 'AUDIENCE_ATTRIBUTE'

export function requireAuth (to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export function isLoggedIn () {
  const idToken = getIdToken()
  return !!idToken && !isTokenExpired(idToken)
}

function isTokenExpired (token) {
  // const expirationDate = getTokenExpirationDate(token)
  // return expirationDate < new Date()
  return false
}

export function getIdToken () {
  return localStorage.getItem(ID_TOKEN_KEY)
}

export function getAccessToken () {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}
