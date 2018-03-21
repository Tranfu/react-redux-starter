import axios from 'axios'

const http = {

  get(url, data) {
    return this.request(url, data, 'get')
  },

  post(url, data) {
    return this.request(url, data, 'post')
  },

  put(url, data) {
    return this.request(url, data, 'put')
  },

  delete(url, data) {
    return this.request(url, data, 'delete')
  },

  request(url, data, method) {
    const baseConfig = {
      url: `${url}`,
      method: method,
      transformResponse: [data => {
        // Do whatever you want to transform the data

        return data
      }],
    }

    let config = {}
    if (method === 'get') {
      config = Object.assign({}, baseConfig, { params: data })
    } else {
      config = Object.assign({}, baseConfig, { data: data })
    }

    return new Promise((resolve, reject) => {
      axios.request(config).then(data => {
        if (data.data.code && data.data.code !== '0') {

        } else {
          resolve(data.data)
        }
      }).catch(error => {
        reject(error)
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
    })
  },
}

export default http
