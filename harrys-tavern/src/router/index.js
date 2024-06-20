import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import SignIn from '../components/Sign-In.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

