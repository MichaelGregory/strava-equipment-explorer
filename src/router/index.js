import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import AuthenticationCallback from '../components/AuthenticationCallback.vue'
// import { requireAuth } from '../utils/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
      // beforeEnter: requireAuth
    },
    {
      path: '/authentication/callback',
      name: 'AuthenticationCallback',
      component: AuthenticationCallback
    }
  ]
})
