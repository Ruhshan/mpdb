import axios from 'axios'

const API_V1 = '/api/v1'

const ApiClient = axios.create({
  baseURL: API_V1,
  headers: {
    Accept: 'application/json'
  }
})

ApiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    return Promise.reject(error)
  }
)

export default ApiClient
