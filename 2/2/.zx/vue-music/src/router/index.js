import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank'
import Search from '@/components/search'
import Recommend from '@/components/recommend'
import Singer from '@/components/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    }
  ]
})
