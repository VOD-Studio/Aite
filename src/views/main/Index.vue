<script setup lang="ts">
import SideBar from 'components/SideBar.vue';
</script>

<template>
  <div class="w-full h-screen flex">
    <SideBar />
    <Router-view></Router-view>
  </div>
</template>
