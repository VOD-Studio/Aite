import { defineStore } from 'pinia';

export interface MenuItem {
  id: number;
  name: string; // 菜单名
  path?: string; // 路径
  icon?: string; // 图标
  children?: MenuItem[];
}

interface State {
  collapsed: boolean; // 收缩状态
  width: string; // 宽度
  menus: MenuItem[]; // 菜单数组
  activeMenuItem: string; // 当前选中的菜单项
}

export const useSideBarStore = defineStore('sideBar', {
  state: (): State => ({
    collapsed: true,
    width: '50px',
    menus: [
      {
        id: 1,
        name: '舌战群儒',
        path: '/profile',
        icon: 'MessageSquareText'
      }
    ],
    activeMenuItem: ''
  }),
  getters: {},
  actions: {
    setCollapsed(value: State['collapsed']) {
      this.collapsed = value;
    },
    setWidth(value: State['width']) {
      this.width = value;
    },
    setMenus(menus: State['menus']) {
      this.menus = menus;
    },
    setActiveMenuItem(value: State['activeMenuItem']) {
      this.activeMenuItem = value;
    }
  }
});
