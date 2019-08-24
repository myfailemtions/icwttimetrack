import Vue from 'vue'
import Router from 'vue-router'
import Auth from './views/Auth'
import UserInfo from './views/UserInfo'
import UsersList from './views/UsersList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        auth: false
      },
      component: Auth
    },
    {
      path: '/',
      name: 'list',
      component: UsersList
    },
    {
      path: '/lists/:id',
      name: 'userlist',
      component: UserInfo
    }
  ]
})
