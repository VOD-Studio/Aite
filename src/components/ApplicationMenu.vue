<script setup lang="ts">
import { MessageSquareMore } from 'lucide-vue-next';
import { useSideBarStore } from '@/store/side-bar.ts';

const sideBarStore = useSideBarStore();
</script>
<template>
  <div>
    <a-menu
      mode="vertical"
      :collapsed="sideBarStore.collapsed"
    >
      <a-menu-item icon="icon-thumb-up">
        <template #icon>
          <MessageSquareMore size="18" />
        </template>
        舌战群儒
      </a-menu-item>
    </a-menu>
  </div>
</template>
