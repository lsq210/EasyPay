import Vue from 'vue'
import Router from 'vue-router'
import NavList from './NavList'
import cache from '@/cache'
import { USER_TOKEN } from '@/cache/keys'

Vue.use(Router)

const originalPush = Router.prototype.push

Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const baseRoutes = [
  {
    path: '/login',
    name: 'login',
    component: require('@/views/Login').default
  },
  {
    path: '/register',
    name: 'register',
    component: require('@/views/Register').default
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
    path: '/chat',
    name: 'chat',
    component: require('@/views/Chat').default
  },
  {
    path: '*',
    redirect: '404'
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
  if (item.name === 'discover') {
    item.redirect = '/discover/my-join'
    item.children = [{
      path: 'my-join',
      name: 'my-join',
      component: require('@/components/MyJoin').default,
      meta: {
        navShow: true
      }
    },
    {
      path: 'near-by',
      name: 'near-by',
      component: require('@/components/NearBy').default,
      meta: {
        navShow: true
      }
    },
    {
      path: 'hot-info',
      name: 'hot-info',
      component: require('@/components/HotInfo').default,
      meta: {
        navshow: true
      }
    }
    ]
    item.path = '/discover'
    item.children.redirect = '/discover/my-jion'
  }
  return item
})

const guestRoutes = [
  'login',
  'register',
  '404'
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (guestRoutes.includes(to.name) || cache.get(USER_TOKEN)) {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router
