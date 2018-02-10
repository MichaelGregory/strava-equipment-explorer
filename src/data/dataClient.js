import axios from 'axios'

const API_CLIENT_ID = process.env.API_CLIENT_ID
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET
const API_BASE_URL = 'https://www.strava.com'
const API_VERSION = 'v3'

function versionedEndpoint (endpoint) {
  return `/api/${API_VERSION}/${endpoint}`
}

const dataClient = axios.create({
  baseURL: API_BASE_URL
})

export {
  dataClient,
  versionedEndpoint,
  API_CLIENT_ID as apiClientId,
  API_BASE_URL as apiBaseUrl,
  API_CLIENT_SECRET as apiClientSecret
}

export default dataClient
