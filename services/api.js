'use strict'

const axios = require('axios')

const defaults = {
  baseURL: 'https://services.odata.org/TripPinRESTierService/(S(5m1rpz3lht5js3pp25oy3kqu))/',
  headers: () => ({
    'Content-Type': 'application/json',
  }),
}

async function api(method, url, data) {
  // console.log('axiosing', encodeURI(`${defaults.baseURL}${url}`))

  try {
    const res = await axios({
      url: encodeURI(`${defaults.baseURL}${url}`),
      method,
      headers: defaults.headers(),
      params: method === 'get' ? data : undefined,
      data: method !== 'get' ? data : undefined,
    })
    return res.data
  } catch (error) {
    if (error && error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
      return (error.response.data.error.message)
    } else {
      return ('error')
    }
  }
}

const Api = {
  get: (url, data) => api('get', url, data),
  post: (url, data) => api('post', url, data),
  put: (url, data) => api('put', url, data),
  patch: (url, data) => api('patch', url, data),
  delete: (url) => api('delete', url),
}

module.exports = Api
