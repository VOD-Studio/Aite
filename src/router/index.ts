import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Register = () => import('views/RegisterPage.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
