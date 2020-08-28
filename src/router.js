import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/ctf/midhgardhsormr',
      name: 'midhgardhsormr',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "midhgardhsormr" */ './views/ctf/Midhgardhsormr.vue')
    },
    {
      path: '/ctf/helheim',
      name: 'helheim',
      component: () => import(/* webpackChunkName: "helheim" */ './views/ctf/Helheim.vue')
    },
    {
      path: '/ctf/pattern',
      name: 'pattern',
      component: () => import(/* webpackChunkName: "pattern" */ './views/ctf/Pattern.vue')
    },
    {
      path: '/anonymous-viking',
      beforeEnter(){
        window.location.href = 'https://www.facebook.com/Anonimowy-Wiking-105335621006471'
      }
    }
  ]
})
