import Request from '@/request/request.ts';
import api from '@/request/api.ts';
import { IGender } from '@/types/user';

export interface Params {
  email: string;
  password: string;
}

export interface Response {
  id: number;
  email: string;
  username: string;
  description: string;
  avatar: string;
  gender: IGender;
  uid: number;
  created_at: string;
  updated_at: string;
  last_login: number;
  token: string;
}

export const loginRequest = (params: Params) => {
  return Request.post<Response>(api.auth.login, params);
};
