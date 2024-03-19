<script setup lang="ts">
import { useSideBarStore } from '@/store/side-bar.ts';
import Icon from 'components/Icon.vue';
import { useRouter } from 'vue-router';

const sideBarStore = useSideBarStore();

const router = useRouter();

const handleMenuItemClick = (key: string) => {
  router.push(key);
};
</script>
<template>
  <div>
    <a-menu
      mode="vertical"
      :selected-keys="[sideBarStore.activeMenuItem]"
      :collapsed="sideBarStore.collapsed"
      @menu-item-click="handleMenuItemClick"
    >
      <a-menu-item
        v-for="item in sideBarStore.menus"
        :key="item.path"
      >
        <template #icon>
          <Icon
            v-if="item.icon"
            :name="item.icon"
            :size="18"
          />
        </template>
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>
