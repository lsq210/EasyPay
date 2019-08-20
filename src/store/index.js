import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navShow: true
  },
  mutations: {
    navChange (state) {
      if (this.$route.path === '/post') {
        state.navShow = false
      } else {
        state.navShow = true
      }
    }
  },
  modules,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
