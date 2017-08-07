import NProgress from 'nprogress'
import sweetalert from 'sweetalert'

const $http = {

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

  request(url, data, type) {
    NProgress.start()
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${SERVICE_URL}${url}`,
        type: type,
        data: data ? data : {},
        cache: false,
      }).done(resp => {
        resolve(typeof(resp) === 'string' ? JSON.parse(resp) : resp)
      }).fail(response => {
        sweetalert({
          title: '出错啦！',
          type: 'error',
          showConfirmButton: true
        })
        reject(typeof(response) === 'string' ? JSON.parse(response) : response)
      }).always(() => {
        NProgress.done()
      })
    });
  },
}

export default $http
