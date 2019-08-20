import Vue from 'vue'
import Router from 'vue-router'
import NavList from './NavList'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const routes = NavList.map(item => {
  return {
    path: item.path,
    name: item.name,
    component: item.component,
    meta: {
      text: item.text,
      navShow: item.show,
      icon: item.icon
    }
  }
})

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'landing-page',
  //     component: require('@/components/LandingPage').default
  //   },
  //   {
  //     path: '*',
  //     redirect: '/'
  //   }
  // ]
  routes
})
