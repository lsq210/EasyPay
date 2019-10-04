import Vue from 'vue'
import Router from 'vue-router'
import NavList from './NavList'
import cache from '../cache'
import {USER_TOKEN} from '../cache/keys'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const baseRoutes = [
  {
    path: '/login',
    name: 'login',
    component: require('@/views/Login').default
  },
  {
    path: '/404',
    name: '404',
    component: require('@/views/404').default
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
routes = routes.map(item => {
  if (item.name === 'personal-page') {
    item.redirect = '/personal-page/my-deal'
    item.children = [{
      path: 'my-deal',
      name: 'my-deal',
      component: require('@/components/MyDeal').default,
      meta: {
        navShow: true
      }
    },
    {
      path: 'comment',
      name: 'comment',
      component: require('@/components/Comment').default,
      meta: {
        navShow: true
      }
    }
    ]
    item.path = '/personal-page'
    item.children.redirect = '/personal-page/my-deal'
  }
  return item
})
console.log(routes)

const router = new Router({routes})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else if (!cache.get(USER_TOKEN)) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
