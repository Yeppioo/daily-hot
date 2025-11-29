<template>
  <div>
    <MainView />
  </div>
</template>

<script setup lang="ts">
import MainView from './MainView.vue';
</script>
<style scoped>
body {
  font-family: 'a', sans-serif;
  background-size: cover;
  color: #e0e0e0;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  overflow-x: hidden;
  width: 100vw;
  overflow-y: scroll;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
}
</style>
