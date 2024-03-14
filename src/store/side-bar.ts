import { defineStore } from 'pinia';

interface State {
  collapsed: boolean; // 收缩状态
  width: string; // 宽度
}

export const useSideBarStore = defineStore('sideBar', {
  state: (): State => ({
    collapsed: false,
    width: '50px'
  }),
  getters: {},
  actions: {
    setCollapsed(value: State['collapsed']) {
      this.collapsed = value;
    },
    setWidth(value: State['width']) {
      this.width = value;
    }
  }
});
