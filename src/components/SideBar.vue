<script lang="ts" setup>
import ApplicationMenu from 'components/ApplicationMenu.vue';
import MainUserCard from 'components/MainUserCard.vue';
import { ListCollapse } from 'lucide-vue-next';
import { useSideBarStore } from '@/store/side-bar.ts';

const sideBarStore = useSideBarStore();
</script>

<template>
  <div
    class="h-full border border-r flex flex-col justify-between transition-all w-52"
    :style="{
      width: sideBarStore.collapsed ? sideBarStore.width : '13rem'
    }"
  >
    <div>
      <!-- logo 部分 -->
      <div class="flex items-center justify-center w-full py-10">
        <RouterLink
          to="/"
          class="text-3xl text-primary font-bold"
          >{{ sideBarStore.collapsed ? 'A' : 'AITE' }}
        </RouterLink>
      </div>

      <!-- 菜单部分 -->
      <ApplicationMenu />
    </div>

    <div class="pb-4">
      <MainUserCard />

      <div
        :style="{
          width: sideBarStore.width
        }"
        class="w-[48px] flex items-center justify-center"
      >
        <a-button @click="sideBarStore.setCollapsed(!sideBarStore.collapsed)">
          <template #icon>
            <ListCollapse
              :size="16"
              :class="[sideBarStore.collapsed ? '' : 'rotate-180'].join('')"
            />
          </template>
        </a-button>
      </div>
    </div>
  </div>
</template>
