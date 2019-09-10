import request from './config/request'
import urls from './config/urls'

export default {
  // Get demo
  getUserInfor: (param1, param2) => {
    return request({
      url: urls.user.getRequest,
      method: 'get',
      params: {
        param1, param2
      }
    })
  },
  // Post demo
  postUserInfor: (param1, param2) => {
    return request({
      url: urls.user.postRequest,
      method: 'post',
      data: {
        param1, param2
      }
    })
  }
}
