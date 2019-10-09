import Vue from 'vue'
import './styles'
import './assets/svg'
import './apis/mock'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'oIK5hbeO8Zb74VgFY3DWL8KccHWx8hI2'
})

Vue.use(ElementUI)

document.addEventListener('deviceready', () => {
  if (window.cordova) {
    Vue.cordova = Vue.prototype.$cordova = window.cordova
  }
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App: require('./App').default },
    router: require('./router').default,
    store: require('./store').default
  })
}, false)
