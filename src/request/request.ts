import axiosInstance from '@/request/axiosInstance.ts';
import { BaseResponse } from '@/request/types';

class Request {
  static get = <T>(url: string, queries?: object): Promise<T> => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(url, {
          params: queries
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static post = <T>(url: string, params?: object): Promise<BaseResponse<T>> => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(url, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static patch = <T>(
    url: string,
    params?: object
  ): Promise<BaseResponse<T>> => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .patch(url, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default Request;
