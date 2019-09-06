import HomePage from '../views/HomePage'
import Discover from '../views/Discover'
import Post from '../views/Post'
import MessagePage from '../views/MessagePage'
import PersonalPage from '../views/PersonalPage'

const NavList = [
  {
    path: '/home-page',
    name: 'home-page',
    component: HomePage,
    icon: 'home',
    text: '主页',
    navShow: true
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover,
    icon: 'home',
    text: '发现',
    navShow: true
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
    icon: 'home',
    text: '发布',
    navShow: false
  },
  {
    path: '/message',
    name: 'MessagePage',
    component: MessagePage,
    icon: 'home',
    text: '消息',
    navShow: true
  },
  {
    path: '/personal-page',
    name: 'personal-page',
    component: PersonalPage,
    icon: 'home',
    text: '我的',
    navShow: true
  }
]

export default NavList
