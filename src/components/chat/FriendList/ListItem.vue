<script setup lang="ts">
import { Gender } from '@/request/services/auth/register.ts';

interface Props {
  avatar?: string;
  username?: string;
  gender?: Gender;
  online?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  avatar: '',
  username: 'Username',
  gender: Gender.Unknown,
  online: true
});
</script>

<template>
  <div
    class="w-full flex items-center justify-between px-4 hover:bg-gray-100 py-3 cursor-pointer transition-all"
  >
    <div class="flex items-center">
      <a-avatar>
        <img
          v-if="props.avatar"
          :src="props.avatar"
          alt="头像"
        />
        <template v-else>{{ props.username[0] }}</template>
      </a-avatar>
      <span class="ml-4">{{ props.username }}</span>
    </div>
    <div class="flex items-center">
      <div
        class="h-2 aspect-square rounded-full"
        :class="[props.online ? ' bg-green-600' : 'bg-gray-400'].join('')"
      >
        >
      </div>
    </div>
  </div>
</template>
