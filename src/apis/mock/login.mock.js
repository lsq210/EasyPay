import userInfor from './userInfor'
import getUrlQuery from './utils/getUrlQuery'

export default {
  // 登录
  validate: config => {
    var query = getUrlQuery(config.url)
    var user = userInfor.filter(item => {
      return item.userName === query.account && item.passwd === query.passwd
    })
    if (user.length) {
      return {
        userName: user[0].userName,
        token: user[0].token
      }
    } else {
      return {
        message: '用户名或密码错误'
      }
    }
  },
  // 注册
  postUserInfor: config => {
    return {
      message: '注册失败，请联系管理员'
    }
  }
}
