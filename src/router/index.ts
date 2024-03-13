import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Register = () => import('views/Register.vue');
const Login = () => import('views/Login.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
