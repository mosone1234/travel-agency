import axios from 'axios'

const htttpClient = axios.create({
  baseURL: '/services',
  timeout: 1000,
  headers: {
    'Content-type': 'application/json'
  }
})

export default htttpClient
