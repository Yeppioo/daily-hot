<template>
  <TitleBar></TitleBar>
  <main class="container">
    <!-- 添加一些占位内容以启用滚动 -->
    <div v-for="n in 50" :key="n" class="placeholder-item">
      这是一个占位内容，用于测试滚动效果 {{ n }}
    </div>
  </main>
</template>
<script setup lang="ts">
import TitleBar from './components/TitleBar.vue';
</script>
<style scoped>
main {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto; /* 居中显示 */
  min-height: 150vh; /* 确保有足够的滚动内容 */
}

.placeholder-item {
  height: 50px;
  background-color: var(--item-bg, #f0f0f0);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: var(--text-color, #333);
}

/* 添加一些主题变量，确保在 dark 模式下颜色也合适 */
:root {
  --item-bg: #f0f0f0;
  --text-color: #333;
  --secondary-text-color: #888;
  --button-bg: #f0f0f0;
  --button-color: #333;
  --button-hover-bg: #e0e0e0;
}

[data-theme='dark'] {
  --item-bg: #222;
  --text-color: #e0e0e0;
  --secondary-text-color: #aaa;
  --button-bg: #333;
  --button-color: #e0e0e0;
  --button-hover-bg: #444;
}
</style>
