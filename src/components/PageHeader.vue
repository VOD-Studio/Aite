<script setup lang="ts">
interface Props {
  title: string;
  onBack?: () => void;
  hideBack?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '标题',
  hideBack: false,
  onBack: () => {}
});
</script>

<template>
  <div class="h-20 flex items-center px-6">
    <button
      v-if="!props.hideBack"
      class="flex items-center justify-center h-7 aspect-square rounded-full mr-2 hover:bg-[rgba(255,255,255,0.3)] transition-all"
      @click="props.onBack"
    >
      <Icon
        name="ChevronLeft"
        :size="20"
      ></Icon>
    </button>
    <span class="text-white text-xl font-bold">{{ props.title }}</span>
  </div>
</template>
