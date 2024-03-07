import axios, { AxiosError } from 'axios';
import NProgress from 'nprogress';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_PREFIX
});

// 错误处理
const handleError = (error: AxiosError) => {
  NProgress.done();
  return Promise.reject(error);
};

// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
  NProgress.start();
  return config;
}, handleError);

// 响应拦截器
axiosInstance.interceptors.response.use((response) => {
  NProgress.done();
  return response;
}, handleError);

export default axiosInstance;
