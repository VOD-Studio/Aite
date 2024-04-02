<script setup lang="ts">
import Icon, { IconName } from 'components/Icon.vue';
import { ref } from 'vue';
import UserSearchPane, { UserListItem } from './UserSearchPane.vue';
import { findUsersRequest } from '@/request/services/user/find-users';

interface SearchType {
  label: string;
  value: string;
  icon: IconName;
}

// 搜索类型选项
const searchTypeOpts: SearchType[] = [
  {
    label: '消息',
    value: 'message',
    icon: 'MessageCircleMore'
  },
  {
    label: '用户',
    value: 'user',
    icon: 'User'
  },
  {
    label: '用户组',
    value: 'user-group',
    icon: 'Users'
  }
];

// 当前搜索类型
const searchType = ref<SearchType>(searchTypeOpts[0]);

// 搜索值
const searchValue = ref('');

// 搜索请求
const search = () => {
  console.log(searchType.value);

  const { value } = searchValue;

  findUsersRequest({
    uid: value
  }).then((res) => {
    userList.value = res.data;

    const _userList: UserListItem[] = [];

    res.data.forEach((v) => {
      _userList.push({
        id: v.id,
        uid: v.uid,
        avatar: v.avatar,
        username: v.username
      });
    });

    userList.value = _userList;
  });
};

// 用户搜索结果列表
const userList = ref<UserListItem[]>([]);
</script>

<template>
  <div class="">
    <div class="px-4">
      <a-input-group style="width: 100%">
        <a-popover
          position="bl"
          class="pop"
          :content-style="{ padding: 0 }"
        >
          <a-select
            v-model="searchType"
            class="type-select"
            style="width: 40px"
            :popup-visible="false"
          >
            <template #label>
              <Icon :name="searchType.icon" />
            </template>
          </a-select>

          <template #content>
            <ul class="mb-[4px]">
              <li
                v-for="(opt, index) in searchTypeOpts"
                :key="index"
                class="flex items-center h-7 text-xs hover:bg-[#f2f3f5] cursor-pointer px-4"
                @click="searchType = opt"
              >
                <Icon
                  class="mr-1"
                  :name="opt.icon"
                />
                <span>{{ opt.label }}</span>
              </li>
            </ul>
          </template>
        </a-popover>
        <a-input-search
          v-model="searchValue"
          @keyup.enter="search"
          @search="search"
        />
      </a-input-group>
    </div>

    <div class="mt-4">
      <p class="text-xs px-4 text-gray-500 line-clamp-3 leading-5">
        <span class="">搜索</span>
        <span class="text-primary">{{
          searchType.label + (searchValue ? '-"' + searchValue + '"' : '')
        }}</span>
        <span></span>
      </p>

      <UserSearchPane
        v-show="searchType.value === 'user'"
        :user-list="userList"
      />
    </div>
  </div>
</template>

<style scoped>
:deep(.arco-select-view-suffix) {
  display: none;
}
</style>
