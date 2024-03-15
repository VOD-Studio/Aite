<script setup lang="ts">
interface Props {
  status: boolean;
  showText?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  status: false,
  showText: true
});
</script>
<template>
  <div class="flex items-center">
    <div
      class="h-2 aspect-square rounded-full"
      :class="[props.status ? ' bg-green-600' : 'bg-gray-400'].join('')"
    ></div>
    <span
      v-if="props.showText"
      class="ml-2 text-xs"
      :class="[props.status ? 'text-green-600' : 'text-gray-400'].join('')"
    >
      {{ props.status ? '在线' : '离线' }}
    </span>
  </div>
</template>
