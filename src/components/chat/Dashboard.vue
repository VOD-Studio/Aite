<script setup lang="ts">
import Icon from 'components/Icon.vue';
import FriendsList from './FriendList/Index.vue';
import SearchPane from './search-pane/Index.vue';
</script>

<template>
  <div class="w-72 border-r h-full">
    <!-- 顶部 -->
    <div class="h-20 flex items-center justify-between px-6 relative border-b">
      <span class="text-xl text-primary font-bold select-none">舌战群儒</span>

      <div class="flex items-center"></div>
    </div>

    <!-- 标签页内容 -->
    <a-tabs
      class="tabs mt-5"
      type="rounded"
    >
      <a-tab-pane :key="1">
        <template #title>
          <div class="flex items-center">
            <Icon
              name="MessageCircle"
              :size="16"
            />
            <!-- <span class="ml-1">消息</span> -->
          </div>
        </template>
      </a-tab-pane>

      <a-tab-pane :key="2">
        <template #title>
          <div class="flex items-center">
            <Icon
              name="Users"
              :size="16"
            />
            <!-- <span class="ml-1">消息</span> -->
          </div>
        </template>

        <FriendsList />
      </a-tab-pane>

      <a-tab-pane :key="3">
        <template #title>
          <div class="flex items-center">
            <Icon
              name="Search"
              :size="16"
            />
            <!-- <span class="ml-1">消息</span> -->
          </div>
        </template>

        <SearchPane />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
.tabs :deep(.arco-tabs-nav-tab) {
  justify-content: center;
}
</style>
