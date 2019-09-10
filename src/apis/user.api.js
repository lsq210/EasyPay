import request from './config/request'
import urls from './config/urls'

export default {
  // Get user
  getUserInfor: (param1, param2) => {
    return request({
      url: urls.user.getUserInfor.url(),
      method: urls.user.getUserInfor.method,
      params: {
        param1, param2
      }
    })
  },
  // Post user
  postUserInfor: (param1, param2) => {
    return request({
      url: urls.user.postUserInfor.url(),
      method: urls.user.postUserInfor.method,
      data: {
        param1, param2
      }
    })
  }
}
