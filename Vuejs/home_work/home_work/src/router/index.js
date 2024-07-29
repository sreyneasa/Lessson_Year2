import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContectPage from '@/views/ContectPage.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contect',
      name: 'contect',
      component: ContectPage
    }
  
  
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
  export default router;