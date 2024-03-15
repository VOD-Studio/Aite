<script setup lang="ts">
import Card from 'components/Card.vue';
import MiniRecord from './MiniRecord.vue';
import Icon from 'components/Icon.vue';
</script>

<template>
  <Card
    title="动态"
    icon="MessageSquareMore"
  >
    <ul>
      <li
        v-for="l in 3"
        :key="l"
        class="mb-4"
      >
        <MiniRecord />
        <a-divider v-show="l !== 3">
          <Icon
            name="Sparkles"
            class="text-gray-300"
          />
        </a-divider>
      </li>
    </ul>
  </Card>
</template>
