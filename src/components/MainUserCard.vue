<script setup lang="ts">
import { useUserStore } from '@/store/user.ts';
import { useSideBarStore } from '@/store/side-bar.ts';
import { User } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { Modal } from '@arco-design/web-vue';

const userStore = useUserStore();
const sideBarStore = useSideBarStore();
const router = useRouter();

const logout = () => {
  Modal.warning({
    title: '提示',
    content: '确认退出系统。',
    hideCancel: false,
    onBeforeOk: (done: (closed: boolean) => void) => {
      userStore.$reset();
      sideBarStore.$reset();
      router.push('/login');
      done();
    }
  });
};
</script>
<template>
  <div
    class="w-full flex items-center px-3 mb-4 transition-all"
    :class="[sideBarStore.collapsed ? 'justify-center h-9' : 'h-10'].join('')"
    :style="{
      paddingLeft: sideBarStore.collapsed ? '0rem' : '0.75rem',
      paddingRight: sideBarStore.collapsed ? '0rem' : '0.75rem'
    }"
  >
    <a-popover
      position="right"
      :trigger="sideBarStore.collapsed ? 'hover' : 'contextMenu'"
    >
      <button
        class="h-full aspect-square flex justify-center items-center rounded-full overflow-hidden bg-gray-800 text-white"
      >
        <img
          v-if="userStore.avatar"
          src="http://183.162.254.169:8086/public/uploads/47/20230807/1c56665244bc9b2718d7b40a6304429e.jpeg"
          alt="头像"
          class="w-full h-full object-cover"
        />
        <User
          v-else
          :size="sideBarStore.collapsed ? 22 : 26"
        />
      </button>
      <template #content>
        <div class="flex flex-col items-start">
          <span class="font-bold">{{ userStore.username || '用户名' }}</span>
          <button
            class="text-xs text-stone-500 hover:text-primary py-0.5"
            @click="logout"
          >
            退出
          </button>
        </div>
      </template>
    </a-popover>

    <div
      class="h-full flex flex-col items-start justify-between ml-3"
      :class="[sideBarStore.collapsed ? 'hidden' : 'flex'].join('')"
    >
      <span class="font-bold">
        {{ userStore.username || '用户名' }}
      </span>
      <button
        class="text-xs text-stone-500 hover:text-primary py-0.5"
        @click="logout"
      >
        退出
      </button>
    </div>
  </div>
</template>
