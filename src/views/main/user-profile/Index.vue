<script setup lang="ts">
import { reactive } from 'vue';
import Icon from 'components/Icon.vue';
import PageHeader from 'components/PageHeader.vue';
import OnlineStatus from 'components/OnlineStatus.vue';
import Declaration from 'components/profile/Declaration.vue';
import MiniRecordList from 'components/profile/MiniRecordList.vue';

interface BaseInfoListItem {
  label: string;
  icon: string;
  value: string;
}

const baseInfoList = reactive<BaseInfoListItem[]>([
  {
    label: 'ID',
    icon: '',
    value: '0000001'
  },
  {
    label: '邮箱',
    icon: 'Mail',
    value: 'number001@wolong.com'
  },
  {
    label: '注册日期',
    icon: 'CalendarPlus2',
    value: '2024-03-15'
  }
]);
</script>

<template>
  <div class="h-full overflow-auto relative">
    <!-- 顶部栏 -->
    <PageHeader
      class="absolute top-0 left-0 text-white z-30"
      title="个人主页"
    />

    <!-- 背景图块 -->
    <div class="w-full h-64 absolute top-0 right-0 z-10">
      <img
        class="w-full h-full object-cover"
        src="http://183.162.254.169:8086/public/uploads/47/20230717/c93fe8b07e5a7803c75634e12a71a1b4.jpg"
        alt="背景图"
      />
    </div>

    <!-- 详细资料 -->

    <div
      class="w-full mx-auto flex flex-col h-full relative z-20 overflow-auto"
    >
      <!-- 个人资料块 -->
      <div class="w-full flex-shrink-0 bg-white px-12 mt-64">
        <div class="flex mx-auto w-full max-w-[1000px] items-center h-32">
          <!-- 头像 -->
          <div
            class="border-4 self-start relative border-white flex-shrink-0 -translate-y-1/2 w-fit h-fit rounded-full shadow-xl"
          >
            <a-avatar
              image-url="http://183.162.254.169:8086/public/uploads/47/20230807/1c56665244bc9b2718d7b40a6304429e.jpeg"
              :size="160"
              object-fit="cover"
            >
            </a-avatar>
          </div>
          <!-- 资料 -->
          <div class="flex-grow ml-10">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <Icon
                  name="User"
                  fill="#11a4ff"
                  :stroke-width="0"
                  :size="28"
                />
                <span class="text-2xl font-bold ml-2">卧龙帮帮主</span>
              </div>

              <div class="flex items-center">
                <a-button
                  class="ml-3"
                  shape="round"
                >
                  <template #icon>
                    <Icon name="MessageCircleMore" />
                  </template>
                  私信
                </a-button>
                <a-button
                  class="ml-3"
                  shape="round"
                >
                  <template #icon>
                    <Icon name="UserPlus" />
                  </template>
                  关注
                </a-button>
                <!-- <a-button class="ml-3" shape="round"> -->
                <!--   <template #icon> -->
                <!--     <Icon name="UserMinus" /> -->
                <!--   </template> -->
                <!--   取关 -->
                <!-- </a-button> -->
              </div>
            </div>
            <div class="mt-6 flex items-center">
              <OnlineStatus :status="true" />

              <a-tag
                color="green"
                class="ml-6"
              >
                <template #icon>
                  <Icon name="CheckCheck" />
                </template>
                互相关注
              </a-tag>

              <div class="ml-6 flex items-center">
                <div
                  v-for="info in baseInfoList"
                  :key="info.label"
                  class="flex items-center text-gray-500 ml-6 first:ml-0"
                >
                  <Icon
                    v-show="false"
                    :name="info.icon"
                  />
                  <span>{{ info.label }}: </span>
                  <span class="ml-1.5">{{ info.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="w-full flex-grow bg-gray-50 pb-12">
        <div class="w-full mx-auto max-w-[1000px] mt-12">
          <div class="flex justify-between">
            <div class="flex-grow">
              <MiniRecordList />
            </div>

            <div class="flex-shrink-0 w-80 ml-6">
              <Declaration />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page-header :deep(.arco-page-header-back-btn)ver {
  color: red;
}
</style>
