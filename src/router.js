import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Timer from './components/Timer';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/timer',
      name: 'timer',
      component: Timer
    },
    {
      path: '/ctf',
      name: 'ctf',
      component: () => import(/* webpackChunkName: "ctf" */ './views/CTF.vue'),
      children: [
        {
          path: '/ctf/midhgardhsormr',
          name: 'midhgardhsormr',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "midhgardhsormr" */ './views/ctf/Midhgardhsormr.vue')
        },
        {
          path: '/helheim',
          name: 'helheim',
          component: () => import(/* webpackChunkName: "helheim" */ './views/ctf/Helheim.vue')
        },
        {
          path: '/pattern',
          name: 'pattern',
          component: () => import(/* webpackChunkName: "pattern" */ './views/ctf/Pattern.vue')
        },
        {
          path: '/longest-number',
          name: 'longest',
          component: () => import(/* webpackChunkName: "longest" */ './views/ctf/LongestNumber.vue')
        },
      ]
    },
    {
      path: '/anonymous-viking',
      beforeEnter(){
        window.location.href = 'https://www.facebook.com/Anonimowy-Wiking-105335621006471'
      }
    }
  ]
})
