import Request from '@/request/request.ts';
import api from '@/request/api.ts';

export interface Params {
  username: string,
  email: string,
  password: string
}

export interface Response {
  email: string;
}

export const registerRequest = (params: Params) => {
  return Request.post<Response>(api.auth.register, params);
};
