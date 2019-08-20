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
    show: true
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover,
    icon: 'home',
    text: '发现',
    show: true
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
    icon: 'home',
    text: '发布',
    show: false
  },
  {
    path: '/message',
    name: 'MessagePage',
    component: MessagePage,
    icon: 'home',
    text: '消息',
    show: true
  },
  {
    path: '/personal-page',
    name: 'personal-page',
    component: PersonalPage,
    icon: 'home',
    text: '我的',
    show: true
  }
]

export default NavList
