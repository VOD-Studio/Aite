import { createApp } from 'vue';
import '@arco-design/web-vue/dist/arco.min.css';
import '@/assets/css/app.css';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';

const app = createApp(App);

// 路由
app.use(router);

// 状态库
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
