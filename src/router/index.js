import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/MainPage';
import Search from '@/components/Search';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
  ],
});
