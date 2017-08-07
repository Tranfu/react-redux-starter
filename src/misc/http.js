import NProgress from 'nprogress'
import axios from 'axios'
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
    if (method === 'post') {
      return axios({
        method: method, url: `${SERVICE_URL}${url}`, data: data ? data : {},
      }).then(data => {
        NProgress.done()
        if (data.data.code && data.data.code !== '0') {
          sweetalert({
            title: '出错啦！',
            type: 'error',
            text: data.data.msg,
            showConfirmButton: true
          })
        } else {
          return data.data
        }
      }).catch(error => {
        sweetalert({
          title: '出错啦！',
          type: 'error',
          showConfirmButton: true
        })
      })
    } else if (method === 'get') {
      return axios({
        method: method, url: `${SERVICE_URL}${url}`, params: data ? data : {},
      }).then(data => {
        NProgress.done()
        if (data.data.code && data.data.code !== '0') {
          sweetalert({
            title: '出错啦！',
            type: 'error',
            text: data.data.msg,
            showConfirmButton: true
          })
        } else {
          return data.data
        }
      }).catch(error => {
        sweetalert({
          title: '出错啦！',
          type: 'error',
          showConfirmButton: true
        })
      })
    }

  },
}

export default http
