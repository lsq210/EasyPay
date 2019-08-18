import Vue from 'vue'
import LandingPage from '@/components/LandingPage'

describe('LandingPage.vue', () => {
  it('should render correct contents', () => {
    Vue.cordova = Vue.prototype.$cordova = window.cordova
    const Constructor = Vue.extend(LandingPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h2').textContent)
      .to.equal('Vue.cordova')
  })
})
