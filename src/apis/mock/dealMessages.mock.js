import Mock from 'mockjs'
import dealMessages from './dealMessages'

export default {
  // Get dealMessages
  getDealMessages: config => {
    // console.log('Mock: ' + config.url)
    return {
      url: config.url,
      time: Mock.mock('@datetime'),
      dealMessages
    }
  },
  // Post dealMessages
  postUserInfor: config => {
    // console.log('Mock: ' + config.url)
    return {
      url: config.url,
      time: Mock.mock('@datetime')
    }
  }
}
