import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Timer from './components/Timer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/timer',
      name: 'timer',
      component: Timer,
    },
    {
      path: '/ctf',
      name: 'ctf',
      component: () => import(/* webpackChunkName: "ctf" */ './views/CTF.vue'),
      beforeEnter(to, from, next) {
        next(false)
      },
      children: [
        {
          path: '/',
          name: 'ctf-list',
          component: () => import(/* webpackChunkName: "ctf-list" */ './views/ctf/List.vue'),
        },
        {
          path: 'midhgardhsormr',
          name: 'midhgardhsormr',
          component: () => import(/* webpackChunkName: "midhgardhsormr" */ './views/ctf/Midhgardhsormr.vue'),
        },
        {
          path: 'helheim',
          name: 'helheim',
          component: () => import(/* webpackChunkName: "helheim" */ './views/ctf/Helheim.vue'),
        },
        {
          path: 'longest-number',
          name: 'longest',
          component: () => import(/* webpackChunkName: "longest" */ './views/ctf/LongestNumber.vue'),
        }
      ],
    },
    {
      path: '/ctf/pattern',
      name: 'pattern',
      component: () => import(/* webpackChunkName: "pattern" */ './views/ctf/Pattern.vue'),
    },
    {
      path: '/anonymous-viking',
      beforeEnter() {
        window.location.href = 'https://www.facebook.com/Anonimowy-Wiking-105335621006471';
      },
    },
  ],
});
