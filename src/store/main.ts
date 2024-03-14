import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    // 边栏收缩状态
    sideBarCollapsed: false
  }),

  getters: {},

  actions: {
    setSideBarCollapsed(value: boolean) {
      this.sideBarCollapsed = value;
    }
  }
});
