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
      path: '/midhgardhsormr',
      name: 'midhgardhsormr',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "midhgardhsormr" */ './views/Midhgardhsormr.vue')
    },
    {
      path: '/helheim',
      name: 'helheim',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "helheim" */ './views/Helheim.vue')
    },
    {
      path: '/anonymous-viking',
      beforeEnter(){
        window.location.href = 'https://www.facebook.com/Anonimowy-Wiking-105335621006471'
      }
    }
  ]
})
