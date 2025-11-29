<template>
  <TitleBar></TitleBar>
  <main class="container">
    <AppCard
      v-for="app in appList"
      :app-name="app.name"
      :app-icon="app.icon"
      :api-url="api + app.api"
      :key="app.name"
      :app="app"></AppCard>
  </main>
</template>
<script setup lang="ts">
import TitleBar from './components/TitleBar.vue';
import AppCard from './components/AppCard.vue';

import bilibili from './assets/app/bilibili.png';

const api = 'https://hot.api.yik.at';

const appList = [
  {
    name: '百度',
    icon: bilibili,
    api: '/bilibili',
  },
];
</script>
<style scoped>
main {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  padding-top: 100px; /* 为吸顶的标题栏留出空间 */
  margin: 0 auto; /* 居中显示 */
  min-height: 150vh; /* 确保有足够的滚动内容 */
}
</style>
