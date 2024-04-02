export enum IGender {
  Man,
  Women,
  Unknown
}

export interface IUser {
  id: number;
  created_at: string;
  updated_at: string;
  email: string;
  username: string;
  description: string;
  avatar: string;
  gender: IGender;
  uid: number;
  last_login: number;
  online: false;
}
