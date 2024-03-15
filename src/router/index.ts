import { useSideBarStore } from '@/store/side-bar';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Register = () => import('views/RegisterPage.vue');
const Login = () => import('views/Login.vue');

const MainPage = () => import('views/main/Index.vue');
const ChatIndex = () => import('views/main/chat/Index.vue');
const ChatUserProfile = () => import('views/main/chat/UserProfile.vue');

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
    path: '/',
    name: 'Main',
    component: MainPage,
    children: [
      {
        path: '/chat',
        name: 'Chat',
        component: ChatIndex,
        children: [
          {
            path: 'profile',
            name: 'ChatUserProfile',
            component: ChatUserProfile
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to) => {
  const sideBarStore = useSideBarStore();
  // 切换菜单高亮项
  sideBarStore.setActiveMenuItem(to.path);
});
export default router;
