import request from './config/request'
import urls from './config/urls'

export default {
  // 登录
  validate: (account, passwd) => {
    return request({
      url: urls.login.validate.url(),
      method: urls.login.validate.method,
      params: {
        account, passwd
      }
    })
  },
  // 注册
  regist: (account, passwd) => {
    return request({
      url: urls.login.regist.url(),
      method: urls.login.regist.method,
      data: {
        account, passwd
      }
    })
  }
}
