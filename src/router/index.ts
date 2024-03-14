import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Register = () => import('views/RegisterPage.vue');
const Login = () => import('views/Login.vue');

const MainPage = () => import('views/main/Index.vue');

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
  },
  {
    path: '/main',
    name: 'Main',
    component: MainPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
