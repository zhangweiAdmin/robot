import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import list from '@/components/list'
import history from '@/components/history'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})
