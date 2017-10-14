import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import listPage from '@/components/listPage'
import history from '@/components/history'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/list',
      name: 'listPage',
      component: listPage
    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})
