import dataClient, { versionedEndpoint } from './dataClient'

function fetchAthlete (token) {
  const url = versionedEndpoint('athlete')
  const config = {
    params: {
      access_token: token
    },
    headers: {
      'Authorization': `Bearer: ${token}`
    }
  }
  return dataClient.get(url, config)
}

export { fetchAthlete }
