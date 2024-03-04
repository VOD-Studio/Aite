import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_PREFIX
});

// 错误处理
const handleError = (error: AxiosError) => {
  return Promise.reject(error);
};

// 请求拦截器
axiosInstance.interceptors.request.use(config => {
  return config;
}, handleError);

// 响应拦截器
axiosInstance.interceptors.response.use(response => {
  return response;
}, handleError);

export default axiosInstance;
