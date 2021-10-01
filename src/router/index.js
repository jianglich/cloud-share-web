import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Home from '@/views/Home.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/articleDetail',
    name: 'ArticleDetail',
    component: ArticleDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
