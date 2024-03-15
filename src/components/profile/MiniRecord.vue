<script setup lang="ts">
import Icon from 'components/Icon.vue';
</script>

<template>
  <div class="w-full flex">
    <a-avatar
      class="flex-shrink-0 cursor-pointer"
      :size="40"
      >UserName</a-avatar
    >
    <div class="ml-4 flex-grow">
      <div class="flex items-center mt-1">
        <span class="text-primary cursor-pointer">@卧龙帮帮主</span>
      </div>
      <div class="mt-3 cursor-pointer">
        <div class="">
          <p class="line-clamp-2 leading-6">
            我的心是亿万光年恒星爆炸后的残骸，荒烟蔓草，满目疮痍。你来到这里，携着万千欢喜，覆在贫瘠之地上。枯木逢春，从此我的世界里只有为你而绽的名为爱的绝色。
            <br />
            没事就想想如何发财吧，别总在感情的世界里伤春悲秋，捏在手心的钱永远要比那抓不住的心踏实。
          </p>
        </div>
        <ul class="mt-4 w-full flex items-center flex-wrap justify-between">
          <li class="w-[23%] aspect-square cursor-pointer">
            <div class="w-full h-full overflow-hidden">
              <a-image
                width="100%"
                height="100%"
                fit="cover"
                :preview="false"
                src="http://183.162.254.169:8086/public/uploads/47/20230915/4ba9598b8fe02bb9964a9be4121b0f97.jpeg"
                alt="img"
              />
            </div>
          </li>
          <li class="w-[24%] aspect-square cursor-pointer">
            <div class="w-full h-full overflow-hidden">
              <a-image
                width="100%"
                height="100%"
                fit="cover"
                src="http://183.162.254.169:8086/public/uploads/47/20220905/24d2c7b927c209f23bde02d494b5d5fc.png"
                alt="img"
              />
            </div>
          </li>
          <li
            v-for="place in 4"
            :key="'place_' + place"
            class="h-0 w-[23%]"
          ></li>
        </ul>
        <div class="mt-4">
          <span class="text-xs text-gray-400">2024-03-16 18:21:23</span>
        </div>
      </div>
      <div class="flex items-center justify-between mt-4">
        <button
          class="flex items-center h-9 justify-center flex-1 text-xs text-gray-500"
        >
          <Icon name="ThumbsUp" />
          <span class="ml-1">999+</span>
        </button>
        <a-divider direction="vertical" />
        <button
          class="flex items-center h-9 justify-center flex-1 text-xs text-gray-500"
        >
          <Icon name="MessageCircleMore" />
          <span class="ml-1">999+</span>
        </button>
        <a-divider direction="vertical" />
        <button
          class="flex items-center h-9 justify-center flex-1 text-xs text-gray-500"
        >
          <Icon name="Share2" />
          <span class="ml-1">999+</span>
        </button>
      </div>
    </div>
  </div>
</template>
