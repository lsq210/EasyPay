import HomePage from '../views/HomePage'
import Discover from '../views/DiscoverPage'
import Post from '../views/PostPage'
import MessagePage from '../views/MessagePage'
import PersonalPage from '../views/PersonalPage'
// import MyDeal from '@/components/MyDeal'

const NavList = [
  {
    path: '/home-page',
    name: 'home-page',
    component: HomePage,
    icon: 'home',
    size: 'width: 2em; height:2em; margin-top: 0.2em',
    text: '主页',
    navShow: true
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover,
    icon: 'discover',
    size: 'width: 2.2em; height:2.2em',
    text: '发现',
    navShow: true
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
    icon: 'post',
    size: 'width: 2.2em; height:2.2em',
    text: '发布',
    navShow: false
  },
  {
    path: '/message',
    name: 'MessagePage',
    component: MessagePage,
    icon: 'message',
    size: 'width: 2.2em; height:2.2em',
    text: '消息',
    navShow: true
  },
  {
    path: '/personal-page',
    name: 'personal-page',
    component: PersonalPage,
    icon: 'user',
    size: 'width: 2.2em; height:2.2em',
    text: '我的',
    navShow: true
  }
]
export default NavList
