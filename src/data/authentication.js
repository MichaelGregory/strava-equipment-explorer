import dataClient, {apiClientId, apiBaseUrl, apiClientSecret} from './dataClient'

function logIn () {
  const uri = `${apiBaseUrl}/oauth/authorize` +
    `?client_id=${apiClientId}` +
    '&response_type=code' +
    `&redirect_uri=${window.location.origin}/authentication/callback`

  window.location = uri
}

function logOut () {
  const url = ''
  return dataClient.get(url)
}

function authenticationTokenExchange (code) {
  const url = '/oauth/token'
  const params = {
    client_id: apiClientId,
    client_secret: apiClientSecret,
    code
  }
  return dataClient.post(url, params)
}

export {logIn, logOut, authenticationTokenExchange}
