import Vue from 'vue'
import './styles'
import './assets/svg'
import './apis/mock'

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