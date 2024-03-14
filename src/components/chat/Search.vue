<script setup lang="ts">
import Icon from 'components/Icon.vue';
import { ref } from 'vue';

const active = ref(false);

// 处理搜索图标点击事件
const handleSearchIconClick = () => {
  if (active.value) {
    search();
  } else {
    active.value = !active.value;
  }
};

// 搜索输入字段
const searchStr = ref('');

// 搜索
const search = () => {
  console.log(searchStr.value);
};

// 收起搜索框
const collapseSearchBox = () => {
  active.value = false;
  searchStr.value = '';
};
</script>
<template>
  <!-- 占位置用的 -->
  <div class="w-8 h-8"></div>

  <div
    class="transition-all absolute h-8 -translate-y-1/2 top-1/2"
    :class="
      [
        active ? 'absolute px-6 w-full aspect-auto right-0' : 'w-8 right-6'
      ].join('')
    "
  >
    <div
      class="h-full w-full bg-gray-100 rounded-full flex items-center transition-all justify-center overflow-hidden text-gray-400"
      :class="[active ? 'rounded-sm' : 'rounded-full'].join('')"
    >
      <!-- 收起按钮 -->
      <button
        class="h-full aspect-square overflow-hidden flex items-center justify-center hover:text-primary"
        :class="[active ? '' : 'w-0'].join('')"
        @click="collapseSearchBox"
      >
        <Icon
          name="ChevronRight"
          :size="16"
        />
      </button>

      <div
        class="flex-grow overflow-hidden"
        :class="[active ? '' : 'w-0'].join('')"
      >
        <a-input
          v-model="searchStr"
          @keyup.enter="search"
        />
      </div>

      <!-- 展开/搜索按钮 -->
      <button
        class="h-full flex-shrink-0 aspect-square flex items-center justify-center hover:text-primary"
        :class="[active ? '' : ''].join('')"
        @click="handleSearchIconClick"
      >
        <Icon
          name="Search"
          :size="16"
        />
      </button>
    </div>
  </div>
</template>
