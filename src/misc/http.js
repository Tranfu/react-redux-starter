import axios from 'axios'
import NProgress from 'nprogress'
import sweetalert from 'sweetalert'

const http = {

  get(url, data) {
    return this.request(url, data, 'get');
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
    NProgress.start()
    const baseConfig = {
      url: `${SERVICE_URL}${url}`,
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

    axios.request(config).then(data => {
      NProgress.done()
      if (data.data.code && data.data.code !== '0') {
        sweetalert({
          title: 'Request Exception',
          type: 'error',
          text: `${url}: ${data.data.msg}`,
          showConfirmButton: true
        })
      } else {
        return data.data
      }
    }).catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        sweetalert({
          title: 'Request Exception',
          type: 'error',
          text: `${url}: ${error.response.data.message}`,
          showConfirmButton: true,
        })
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        sweetalert({
          title: 'Request Exception',
          type: 'error',
          text: `${url}: The request was made but no response was received`,
          showConfirmButton: true,
        })
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        sweetalert({
          title: 'Request Exception',
          type: 'error',
          text: `${url}: Something happened in setting up the request that triggered an Error`,
          showConfirmButton: true,
        })
      }
      console.log(error.config);
      NProgress.done()
    })
  },
}

export default http
