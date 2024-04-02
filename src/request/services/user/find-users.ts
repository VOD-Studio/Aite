import api from '@/request/api';
import Request from '@/request/request';
import { IUser } from '@/types/user';

interface Queries {
  uid?: string;
  email?: string;
  username?: string;
}

interface Response {
  data: IUser[];
}

export const findUsersRequest = (queries: Queries) => {
  return Request.get<Response>(api.user.findUsers, queries);
};
