<script setup lang="ts">
import SideBar from 'components/SideBar.vue';
import Dashboard from 'components/chat/Dashboard.vue';
</script>

<template>
  <div class="w-full h-screen flex overflow-auto">
    <SideBar class="flex-shrink-0" />
    <section class="flex-grow flex h-full overflow-auto">
      <Dashboard class="flex-shrink-0" />
      <section class="flex-grow h-full overflow-auto">
        <transition name="fade">
          <Router-view />
        </transition>
      </section>
    </section>
  </div>
</template>
