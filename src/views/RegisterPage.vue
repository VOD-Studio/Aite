<script setup lang="ts">
import AuthLayout from 'layouts/AuthLayout.vue';
import { FormInstance, Notification } from '@arco-design/web-vue';
import { reactive, ref } from 'vue';
import { Gender, registerRequest } from '@/request/services/auth/register.ts';

const formRef = ref<FormInstance>();

const form = reactive({
  email: '',
  username: '',
  password: '',
  gender: Gender.Unknown
});

const formRules = {
  email: [{ require: true }, { type: 'email' }],
  username: [],
  password: [{ require: true }]
};

const submitLoading = ref(false);

const handleSubmit = () => {
  formRef.value?.validate().then((r) => {
    if (!r) {
      submitLoading.value = true;
      registerRequest({
        username: form.username,
        password: form.password,
        gender: form.gender,
        email: form.email
      })
        .then(() => {
          Notification.success('注册成功。');
        })
        .catch((res) => {
          if (res.response.status === 409) {
            Notification.warning('该邮箱已被注册。');
          }
        })
        .finally(() => {
          submitLoading.value = false;
        });
    }
  });
};
</script>

<template>
  <AuthLayout>
    <div class="bg-white p-8 pt-6 rounded-md">
      <h1 class="font-bold text-xl text-center">创建账号</h1>

      <a-form
        ref="formRef"
        :model="form"
        :rules="formRules"
        layout="vertical"
        size="large"
        @submit="handleSubmit"
      >
        <a-form-item field="email" label="邮箱" required>
          <div class="w-96">
            <a-input v-model="form.email" placeholder="请输入邮箱" />
          </div>
        </a-form-item>
        <a-form-item field="username" label="用户名">
          <div class="w-96">
            <a-input
              v-model="form.username"
              placeholder="请输入用户名（非必填）"
            />
          </div>
        </a-form-item>
        <a-form-item field="password" label="密码" required>
          <div class="w-96">
            <a-input-password
              v-model="form.password"
              placeholder="请输入密码"
            />
          </div>
        </a-form-item>
        <a-form-item field="gender" label="性别">
          <a-radio-group v-model="form.gender">
            <a-radio :value="Gender.Unknown">保密</a-radio>
            <a-radio :value="Gender.Man">男</a-radio>
            <a-radio :value="Gender.Women">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item>
          <a-button
            :loading="submitLoading"
            html-type="submit"
            type="primary"
            class="w-full"
            >注册</a-button
          >
        </a-form-item>
      </a-form>
      <p class="text-xs text-gray-600">
        进行注册则表示您同意 Aite 的
        <a
          href=""
          class="text-primary border-b border-transparent hover:border-primary transition-all"
          >服务条款</a
        >
        和
        <a
          href=""
          class="text-primary border-b border-transparent hover:border-primary transition-all"
          >隐私权政策</a
        >
        。
      </p>
      <a-link href="" class="font-bold mt-6">已经拥有账号？</a-link>
    </div>
  </AuthLayout>
</template>

<style scoped></style>
