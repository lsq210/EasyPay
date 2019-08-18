import Mock from 'mockjs'
import urls from '../config/urls'
import demoMock from './demo.mock'

Mock.setup({
  timeout: '100-500'
})

// Get demo
Mock.mock(urls.demo.getRequest.regular, urls.demo.getRequest.method, demoMock.getRequest)

// Post demo
Mock.mock(urls.demo.postRequest.regular, urls.demo.postRequest.method, demoMock.postRequest)
