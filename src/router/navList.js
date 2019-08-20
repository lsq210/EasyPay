import HomePage from '../views/HomePage'
import Discover from '../views/Discover'
import Post from '../views/Post'
import MessagePage from '../views/MessagePage'
import PersonalPage from '../views/PersonalPage'

const navList = [
  {
    path: '/home-page',
    name: 'home-page',
    component: HomePage,
    icon: 'home',
    text: '主页'
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover,
    icon: 'discover',
    text: '发现'
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
    icon: 'post',
    text: '发布'
  },
  {
    path: '/message',
    name: 'MessagePage',
    component: MessagePage,
    icon: 'message',
    text: '消息'
  },
  {
    path: '/personal-page',
    name: 'personal-page',
    component: PersonalPage,
    icon: 'personal',
    text: '我的'
  }
]

export default navList
