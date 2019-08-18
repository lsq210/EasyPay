import request from './config/request'
import urls from './config/urls'

export default {
  // Get demo
  getRequest: (param1, param2) => {
    return request({
      url: urls.demo.getRequest,
      method: 'get',
      params: {
        param1, param2
      }
    })
  },
  // Post demo
  postRequest: (param1, param2) => {
    return request({
      url: urls.demo.postRequest,
      method: 'post',
      data: {
        param1, param2
      }
    })
  }
}
