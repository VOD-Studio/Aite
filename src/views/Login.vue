<script setup lang="ts">
import AuthLayout from 'layouts/AuthLayout.vue';
import { reactive, ref } from 'vue';
import { FormInstance, Notification } from '@arco-design/web-vue';
import { useUserStore } from '@/store/user.ts';

const userStore = useUserStore();

const formRef = ref<FormInstance>();

const form = reactive({
  email: '',
  password: ''
});

const formRules = {
  email: [{ require: true }, { type: 'email' }],
  password: [{ require: true }]
};

const submitLoading = ref(false);

const handleSubmit = () => {
  formRef.value?.validate().then((r) => {
    if (!r) {
      submitLoading.value = true;

      userStore
        .login({
          email: form.email,
          password: form.password
        })
        .catch((res) => {
          switch (res.response.status) {
            case 401:
            case 422:
              Notification.warning('用户名或密码错误。');
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
    <div
      class="bg-white w-full lg:w-fit h-full lg:h-fit p-8 pt-6 rounded-md transition-all"
    >
      <h1 class="font-bold text-xl text-center">欢迎回来！</h1>

      <a-form
        ref="formRef"
        :model="form"
        :rules="formRules"
        layout="vertical"
        size="large"
        @submit="handleSubmit"
      >
        <a-form-item field="email" label="邮箱" required>
          <div class="w-full lg:w-96 transition-all">
            <a-input v-model="form.email" placeholder="请输入邮箱" />
          </div>
        </a-form-item>
        <a-form-item field="password" label="密码" required>
          <div class="w-full lg:w-96 transition-all">
            <a-input-password
              v-model="form.password"
              placeholder="请输入密码"
            />
          </div>
        </a-form-item>
        <div class="">
          <a-link href="" class="font-bold">忘记密码？</a-link>
        </div>
        <a-form-item>
          <a-button
            :loading="submitLoading"
            html-type="submit"
            type="primary"
            class="w-full mt-2"
            >登录</a-button
          >
        </a-form-item>
      </a-form>
      <p class="text-gray-600">
        需要新的账号？
        <RouterLink to="/register" class="font-bold text-primary"
          >注册</RouterLink
        >
      </p>
    </div>
  </AuthLayout>
</template>

<style scoped></style>
