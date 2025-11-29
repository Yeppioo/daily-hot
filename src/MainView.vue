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
  padding-top: 100px; /* 为吸顶的标题栏留出空间 */
  margin: 0 auto; /* 居中显示 */
  min-height: 150vh; /* 确保有足够的滚动内容 */
}

.placeholder-item {
  height: 50px;
  background-color: var(--item-bg);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: var(--text-color);
}
</style>
