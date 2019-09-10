import Vue from 'vue'
import Router from 'vue-router'
import NavList from './NavList'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const baseRoutes = [
  {
    path: '/login',
    name: 'login',
    component: require('@/components/LandingPage').default
  },
  {
    path: '/404',
    name: '404',
    component: require('@/components/LandingPage').default
  },
  {
    path: '/deal-message',
    name: 'DealMessage',
    component: require('@/views/DealMessage').default
  },
  {
    path: '*',
    redirect: '/home-page'
  }
]
var routes = baseRoutes.concat(NavList.map(item => {
  return {
    path: item.path,
    name: item.name,
    component: item.component,
    meta: {
      text: item.text,
      navShow: item.navShow,
      icon: item.icon
    }
  }
}))

console.log(routes)
export default new Router({
  routes
})
