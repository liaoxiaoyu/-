import Vue from 'vue'
import Router from 'vue-router'
import User from '@/views/UserInfo/userInfo'
import Community from '@/views/Community/community'
import NewsList from '@/views/News/newsList'
import GrowSquare from '@/views/GrowSquare/growSquare'
import NewsDetail from '@/views/News/newsDetail'
import ChildrenFile from '@/views/UserInfo/childrenFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Community',
      component: Community
    },
    {
      path: '/growSquare',
      name: 'GrowSquare',
      component: GrowSquare
    },
    {
      path: '/news',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/news/detail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/childrenFile',
      name: 'ChildrenFile',
      component: ChildrenFile
    }
  ]
})
