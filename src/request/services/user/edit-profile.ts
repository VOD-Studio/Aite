import api from '@/request/api';
import Request from '@/request/request';

export interface Params {
  username?: string;
  password?: string;
  email?: string;
}

export interface Response {
  username: string;
}

export const editProfileRequest = (params: Params) => {
  return Request.patch<Response>(api.user.editProfile, params);
};
