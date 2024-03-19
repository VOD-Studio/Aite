<script setup lang="ts">
import { computed } from 'vue';
import * as icons from 'lucide-vue-next';

export type IconName = keyof typeof icons;
interface Props {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  defaultClass?: string;
  fill?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  color: '',
  strokeWidth: 2,
  defaultClass: '',
  fill: 'none'
});
const icon = computed(() => icons[props.name]);
</script>

<template>
  <component
    :is="icon"
    :size="props.size"
    :color="props.color"
    :stroke-width="props.strokeWidth"
    :default-class="props.defaultClass"
    :fill="props.fill"
  />
</template>
