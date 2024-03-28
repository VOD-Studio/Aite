<script setup lang="ts"></script>

<template>
  <a-form
    :label-col-props="{
      span: 2
    }"
  >
    <span class="text-lg font-bold mb-4">账号设置</span>
    <a-form-item label="邮箱">
      <a-row style="width: 100%">
        <a-col flex="auto">
          <a-input disabled />
        </a-col>
        <a-col flex="100px">
          <a-button type="text">修改邮箱</a-button>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item label="密码">
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
