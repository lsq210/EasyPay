import Vue from 'vue'
import Router from 'vue-router'
import navList from './navList'

Vue.use(Router)

const routes = navList.map(item => {
  return {
    path: item.path,
    name: item.name,
    component: item.component,
    icon: item.icon,
    text: item.text
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
