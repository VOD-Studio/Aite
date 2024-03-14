<script setup lang="ts">
import { computed } from 'vue';
import * as icons from 'lucide-vue-next';

interface Props {
  name: String;
  size?: Number;
  color?: String;
  strokeWidth?: Number;
  defaultClass?: String;
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  color: '',
  strokeWidth: 2,
  defaultClass: ''
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
  />
</template>
