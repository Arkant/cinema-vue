import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignUp from './views/Sign-Up.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      // component: () => import('./views/Sign-Up.vue')
      component: SignUp
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: () => import('./views/Log-In.vue')
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('./views/Films.vue')
    }
    ,
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
