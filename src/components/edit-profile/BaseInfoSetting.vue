<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const currentAvatar = ref('');

onMounted(() => {
  currentAvatar.value = userStore.avatar;
});

const onAvatarUploaderChange = (_, currentFile) => {
  currentAvatar.value = URL.createObjectURL(currentFile.file);
  // 直接上传
};

const acvatarUploadState = ref(false);
</script>

<template>
  <a-form
    :label-col-props="{
      span: 2
    }"
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

    <a-form-item label="用户名">
      <a-input />
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        >保存</a-button
      >
    </a-form-item>
  </a-form>
</template>
