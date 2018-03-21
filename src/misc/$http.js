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
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${url}`,
        type: type,
        data: data ? data : {},
        cache: false,
      }).done(resp => {
        const data = typeof(resp) === 'string' ? JSON.parse(resp) : resp
        if (data.code === 0) {
          resolve(data)
        } else {

        }
      }).fail(response => {

        reject(typeof(response) === 'string' ? JSON.parse(response) : response)
      }).always(() => {

      })
    });
  },
}

export default $http
