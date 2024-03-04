import axiosInstance from '@/request/axiosInstance.ts';
import { BaseResponse } from '@/request/types';

class Request {
  static get = async (url: string, query?: object) => {
    return (await axiosInstance.get(url, { params: query })).data;
  };

  static post = async <T>(url: string, params?: object): Promise<BaseResponse<T>> => {
    return (await axiosInstance.post(url, params)).data;
  };
}

export default Request;
