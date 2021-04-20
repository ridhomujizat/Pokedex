import axios from 'axios'

const http = (token = null) => {
  const headers = token && {
    authorization: `Bearer ${token}`
  }
  return axios.create({
    baseURL: '',
    headers
  })
}

export default http
