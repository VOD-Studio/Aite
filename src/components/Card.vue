<script setup lang="ts">
import Icon, { IconName } from 'components/Icon.vue';

interface Props {
  title: string;
  icon?: IconName;
}

const props = withDefaults(defineProps<Props>(), {
  title: '标题',
  icon: undefined
});
</script>

<template>
  <div class="w-full rounded bg-white shadow">
    <div class="w-full flex items-center justify-between h-16 px-5">
      <div class="flex items-center">
        <div
          v-if="props.icon"
          class="mr-2"
        >
          <Icon
            v-if="props.icon"
            :name="props.icon"
          />
        </div>
        <span class="text-lg">{{ props.title }}</span>
      </div>
      <div class="flex items-center"></div>
    </div>
    <div class="p-5">
      <slot />
    </div>
  </div>
</template>
