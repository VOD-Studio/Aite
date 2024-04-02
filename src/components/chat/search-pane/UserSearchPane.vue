<script setup lang="ts">
import { IUser } from '@/types/user';
import Icon from 'components/Icon.vue';

export interface UserListItem
  extends Pick<IUser, 'avatar' | 'username' | 'uid' | 'id'> {}

interface Props {
  loading?: boolean;
  userList?: UserListItem[];
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  userList: () => []
});
</script>

<template>
  <a-spin
    :loading="props.loading"
    style="width: 100%"
  >
    <ul class="mt-2 min-h-16">
      <li
        v-for="user in props.userList"
        :key="user.id"
        class="cursor-pointer"
      >
        <RouterLink
          :to="`/profile/${user.id}`"
          class="flex items-center h-16 hover:bg-gray-100 px-4"
        >
          <a-avatar :img-url="user.avatar">{{ user.username }}</a-avatar>
          <div class="flex flex-col ml-3 justify-between py-1">
            <span>{{ user.username }}</span>
            <span class="text-xs mt-1 text-gray-500">{{ user.uid }}</span>
          </div>
        </RouterLink>
      </li>
      <li
        v-show="props.userList.length === 0 && !props.loading"
        class="flex items-center justify-center"
      >
        <a-empty>
          <template #image>
            <Icon
              class="mx-auto"
              :size="20"
              name="TextSearch"
            />
          </template>
          <span class="text-xs mt-2">未搜索到用户</span>
        </a-empty>
      </li>
    </ul>
  </a-spin>
</template>
