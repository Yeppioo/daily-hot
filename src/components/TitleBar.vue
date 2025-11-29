<template>
  <div class="title-bar" :class="{ shrink: isShrunk }">435345</div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
const isShrunk = ref(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isShrunk.value = true;
  } else {
    isShrunk.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.title-bar {
  color: var(--text-color);
  width: 100%;
}
</style>
