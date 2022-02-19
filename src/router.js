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
  ],
});
