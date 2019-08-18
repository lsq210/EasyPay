import Mock from 'mockjs'

export default {
  // Get demo
  getRequest: config => {
    // console.log('Mock: ' + config.url)
    return {
      url: config.url,
      time: Mock.mock('@datetime')
    }
  },
  // Post demo
  postRequest: config => {
    // console.log('Mock: ' + config.url)
    return {
      url: config.url,
      time: Mock.mock('@datetime')
    }
  }
}
