<script setup lang="ts">
import { ref, computed } from 'vue';
import AccountSetting from 'components/edit-profile/AccountSetting.vue';
import BaseInfoSetting from 'components/edit-profile/BaseInfoSetting.vue';

const menus = [
  {
    key: 'base',
    label: '基本资料'
  },
  {
    key: 'account',
    label: '账号设置'
  },
  {
    key: 'privacy',
    label: '隐私设置'
  }
];

const menuSelectedKeys = ref([menus[0].key]);

const activeMenuItemKey = computed(() => {
  return menuSelectedKeys.value[0];
});
</script>

<template>
  <a-page-header title="修改资料">
    <template #breadcrumb>
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>个人资料</a-breadcrumb-item>
        <a-breadcrumb-item>修改资料</a-breadcrumb-item>
      </a-breadcrumb>
    </template>

    <template #subtitle>Aite</template>

    <a-row :gutter="12">
      <a-col :span="4">
        <a-menu v-model:selected-keys="menuSelectedKeys">
          <a-menu-item
            v-for="item in menus"
            :key="item.key"
            >{{ item.label }}</a-menu-item
          >
        </a-menu>
      </a-col>
      <a-col :span="16">
        <BaseInfoSetting v-if="activeMenuItemKey === 'base'" />
        <AccountSetting v-else-if="activeMenuItemKey === 'account'" />
      </a-col>
    </a-row>
  </a-page-header>
</template>
