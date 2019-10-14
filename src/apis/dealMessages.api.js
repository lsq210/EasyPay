import request from './config/request'
import urls from './config/urls'

export default {
  // Get user
  getDealMessages: (param1, param2) => {
    return request({
      url: urls.deal.getDealMessages.url(),
      method: urls.deal.getDealMessages.method,
      params: {
        param1, param2
      }
    })
  },
  // Post user
  postUserInfor: (param1, param2) => {
    return request({
      url: urls.deal.postDealMessages.url(),
      method: urls.user.postDealMessages.method,
      data: {
        param1, param2
      }
    })
  }
}
