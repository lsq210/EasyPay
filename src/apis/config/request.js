import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  withCredentials: true
})

request.interceptors.request.use(config => {
  return config
}, error => {
  // console.log(error.message)
  Promise.reject(error)
})

request.interceptors.response.use(
  response => response,
  error => {
    // console.log(error.message)
    return Promise.reject(error)
  })

export default request
