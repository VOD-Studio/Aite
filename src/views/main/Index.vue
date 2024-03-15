<script setup lang="ts">
import SideBar from 'components/SideBar.vue';
</script>

<template>
  <div class="w-full h-screen flex overflow-auto">
    <SideBar class="flex-shrink-0" />
    <section class="flex-grow h-full overflow-auto">
      <Router-view></Router-view>
    </section>
  </div>
</template>
