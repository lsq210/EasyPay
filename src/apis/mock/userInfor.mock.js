import Mock from 'mockjs'
import userInfor from './userInfor'

export default {
  // Get demo
  getUserInfor: config => {
    // console.log('Mock: ' + config.url)
    return {
      url: config.url,
      time: Mock.mock('@datetime'),
      userInfor
    }
  },
  // Post demo
  postUserInfor: config => {
    // console.log('Mock: ' + config.url)
    return {
      url: config.url,
      time: Mock.mock('@datetime')
    }
  }
}
