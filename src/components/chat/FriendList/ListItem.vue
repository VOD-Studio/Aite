<script setup lang="ts">
import OnlineStatus from 'components/OnlineStatus.vue';
import { IGender } from '@/types/user.ts';

interface Props {
  id?: string;
  avatar?: string;
  username?: string;
  gender?: IGender;
  online?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: '00000001',
  avatar: '',
  username: 'Username',
  gender: IGender.Unknown,
  online: true
});
</script>

<template>
  <RouterLink
    :to="`/profile/${props.id}`"
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
      <OnlineStatus
        :status="props.online"
        :show-text="false"
      />
    </div>
  </RouterLink>
</template>
