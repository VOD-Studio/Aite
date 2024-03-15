<script setup lang="ts">
import Icon from 'components/Icon.vue';

interface Props {
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '标题'
});
</script>

<template>
  <div class="w-full rounded bg-white shadow">
    <div class="w-full flex items-center justify-between h-16 px-5">
      <div class="flex items-center">
        <div class="">
          <Icon name="Quote" />
        </div>
        <span class="text-lg ml-2">{{ props.title }}</span>
      </div>
      <div class="flex items-center"></div>
    </div>
    <div class="p-5">
      <slot />
    </div>
  </div>
</template>
