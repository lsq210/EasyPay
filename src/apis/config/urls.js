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
  }
}

export default urls
