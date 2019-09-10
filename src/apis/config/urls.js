let urls = {
  demo: {
    // Get demo
    getRequest: {
      url () {
        return '/getRequest'
      },
      regular: /\/getRequest/,
      method: 'get'
    },
    // Post demo
    postRequest: {
      url () {
        return '/postRequest'
      },
      regular: /\/postRequest/,
      method: 'post'
    }
  },
  user: {
    getUserInfor: {
      url () {
        return '/getUserInfor'
      },
      regular: /\/getUserInfor/,
      method: 'get'
    },
    postUserInfor: {
      url () {
        return '/postUserInfor'
      },
      regular: /\/postUserInfor/,
      method: 'post'
    }
  }
}

export default urls
