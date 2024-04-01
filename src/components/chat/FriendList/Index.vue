<script setup lang="ts">
import ListItem from './ListItem.vue';

const users = [
  {
    id: 1,
    username: '卧龙',
    avatar: '',
    online: true
  },
  {
    id: 2,
    username: '凤雏',
    avatar:
      'http://183.162.254.169:8086/public/uploads/autotem/3//model/thumb.png',
    online: false
  }
];
</script>

<template>
  <div class="w-full">
    <ul>
      <li
        v-for="user in users"
        :key="user.id"
      >
        <ListItem
          :id="user.id.toString()"
          :username="user.username"
          :online="user.online"
          :avatar="user.avatar"
        />
      </li>
    </ul>
  </div>
</template>
