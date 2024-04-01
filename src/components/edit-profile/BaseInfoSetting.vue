<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/store/user';
import { FieldRule, FileItem, FormInstance } from '@arco-design/web-vue';

const userStore = useUserStore();

const currentAvatar = ref('');

const onAvatarUploaderChange = (_: FileItem[], currentFile: FileItem) => {
  if (currentFile.file) {
    currentAvatar.value = URL.createObjectURL(currentFile.file);
    // 直接上传
  }
};

const acvatarUploadState = ref(false);

// 表单ref
const formRef = ref<FormInstance>();

// 表单数据
const form = ref({
  username: ''
});

// 表单校验规则
const formRules: Record<string, FieldRule<unknown> | FieldRule<unknown>[]> = {
  username: [{ required: true }]
};

// 提交表单
const submitLoading = ref(false);
const submit = () => {
  formRef.value?.validate().then((r) => {
    if (!r) {
      submitLoading.value = true;
      userStore
        .editProfile({
          username: form.value.username
        })
        .then(() => {
          submitLoading.value = false;
        });
    }
  });
};

onMounted(() => {
  currentAvatar.value = userStore.avatar;

  form.value.username = userStore.username;
});
</script>

<template>
  <a-form
    ref="formRef"
    :model="form"
    :label-col-props="{
      span: 2
    }"
    :rules="formRules"
    @submit="submit"
  >
    <span class="text-lg font-bold mb-4">基本资料设置</span>

    <a-form-item label="头像">
      <a-upload
        :auto-upload="false"
        :show-file-list="false"
        @change="onAvatarUploaderChange"
      >
        <template #upload-button>
          <a-spin :loading="acvatarUploadState">
            <a-avatar
              :size="100"
              :image-url="currentAvatar"
            ></a-avatar>
          </a-spin>
        </template>
      </a-upload>
    </a-form-item>

    <a-form-item
      label="用户名"
      field="username"
    >
      <a-input v-model="form.username" />
    </a-form-item>
    <a-form-item>
      <a-button
        :loading="submitLoading"
        type="primary"
        html-type="submit"
        >保存</a-button
      >
    </a-form-item>
  </a-form>
</template>
