import { defineStore } from 'pinia';
import { Gender } from '@/request/services/auth/register.ts';
import {
  loginRequest,
  type Params as LoginRequestParams
} from '@/request/services/auth/login';
import LocalStorageManager from '@/libs/local-storage-manager';
import { Notification } from '@arco-design/web-vue';
import {
  editProfileRequest,
  type Params as EditProfileRequestParams
} from '@/request/services/user/edit-profile';

interface State {
  id: number;
  email: string;
  username: string;
  description: string;
  avatar: string;
  gender: Gender;
  uid: number;
  created_at: string;
  updated_at: string;
  last_login: number;
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    id: 0,
    email: '',
    username: '',
    description: '',
    avatar: '',
    gender: Gender.Unknown,
    uid: 0,
    created_at: '',
    updated_at: '',
    last_login: 0
  }),

  getters: {},

  actions: {
    setLoginInfo(baseInfo: State) {
      this.uid = baseInfo.uid;
      this.id = baseInfo.id;
      this.email = baseInfo.email;
      this.description = baseInfo.description;
      this.avatar = baseInfo.avatar;
      this.gender = baseInfo.gender;
      this.created_at = baseInfo.created_at;
      this.updated_at = baseInfo.updated_at;
      this.last_login = baseInfo.last_login;
    },
    // 登录
    async login(params: LoginRequestParams) {
      return new Promise((resolve, reject) => {
        loginRequest(params)
          .then((res) => {
            // 本地存储 token
            LocalStorageManager.setItem('token', res.data.token);

            // 存储到 store
            this.uid = res.data.uid;
            this.id = res.data.id;
            this.email = res.data.email;
            this.description = res.data.description;
            this.username = res.data.username;
            this.avatar = res.data.avatar;
            this.gender = res.data.gender;
            this.created_at = res.data.created_at;
            this.updated_at = res.data.updated_at;
            this.last_login = res.data.last_login;

            Notification.success('登录成功');
            resolve(res);
          })
          .catch((res) => {
            reject(res);
          });
      });
    },
    // 修改资料
    async editProfile(params: EditProfileRequestParams) {
      return new Promise((resolve, reject) => {
        editProfileRequest(params)
          .then((res) => {
            // 修改 store 中的数据
            this.username = res.data.username;

            Notification.success('资料修改成功');
            resolve(res);
          })
          .catch((res) => {
            reject(res);
          });
      });
    }
  }
});
