<script setup lang="ts">
import Icon, { IconName } from 'components/Icon.vue';
import { ref } from 'vue';
import UserSearchPane from './UserSearchPane.vue';

interface SearchType {
  label: string;
  value: string;
  icon: IconName;
}

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

const searchType = ref<SearchType>(searchTypeOpts[0]);

const searchValue = ref('');

const search = () => {
  console.log(searchType.value);
};
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

      <UserSearchPane v-show="searchType.value === 'user'" />
    </div>
  </div>
</template>

<style scoped>
:deep(.arco-select-view-suffix) {
  display: none;
}
</style>
