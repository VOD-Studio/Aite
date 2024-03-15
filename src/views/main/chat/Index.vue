<script setup lang="ts">
import Dashboard from 'components/chat/Dashboard.vue';
</script>

<template>
  <section class="flex h-full overflow-auto">
    <Dashboard class="flex-shrink-0" />
    <section class="flex-grow h-full overflow-auto">
      <Router-view />
    </section>
  </section>
</template>
