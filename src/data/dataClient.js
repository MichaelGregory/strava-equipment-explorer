import axios from 'axios'

const API_CLIENT_ID = process.env.API_CLIENT_ID
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET
const API_BASE_URL = 'https://www.strava.com'

const dataClient = axios.create({
  baseURL: API_BASE_URL,
  params: {
    client_id: API_CLIENT_ID
  }
})

export {
  dataClient,
  API_CLIENT_ID as apiClientId,
  API_BASE_URL as apiBaseUrl,
  API_CLIENT_SECRET as apiClientSecret
}

export default dataClient
