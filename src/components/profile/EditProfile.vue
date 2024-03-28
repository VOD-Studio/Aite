<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <a-button
    shape="round"
    @click="router.push('/edit-profile')"
  >
    <template #icon>
      <Icon name="FilePenLine" />
    </template>
    修改资料
  </a-button>
</template>
