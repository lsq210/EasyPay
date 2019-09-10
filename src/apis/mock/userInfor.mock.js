import Mock from 'mockjs'

export default {
  // Get demo
  getUserInfor: config => {
    // console.log('Mock: ' + config.url)
    return {
      url: config.url,
      time: Mock.mock('@datetime'),
      userId: 1
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
