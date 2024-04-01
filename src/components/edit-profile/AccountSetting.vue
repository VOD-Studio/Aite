<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  email: '',
  password: ''
});
</script>

<template>
  <a-form
    :label-col-props="{
      span: 2
    }"
    :model="form"
  >
    <span class="text-lg font-bold mb-4">账号设置</span>
    <a-form-item
      label="邮箱"
      field="email"
    >
      <a-row style="width: 100%">
        <a-col flex="auto">
          <a-input disabled />
        </a-col>
        <a-col flex="100px">
          <a-button type="text">修改邮箱</a-button>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item
      label="密码"
      field="password"
    >
      <a-row style="width: 100%">
        <a-col flex="auto">
          <a-input-password disabled />
        </a-col>
        <a-col flex="100px">
          <a-button type="text">修改密码</a-button>
        </a-col>
      </a-row>
    </a-form-item>
  </a-form>
</template>
