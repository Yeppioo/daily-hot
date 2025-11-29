<template>
  <div class="app-card">
    <div class="app-header">
      <img :src="appIcon" alt="App Icon" class="app-icon" />
      <h2 class="app-name">{{ appName }}</h2>
    </div>
    <div v-if="loading" class="loading-indicator">加载中...</div>
    <div v-if="error" class="error-message">错误: {{ error.message }}</div>
    <ul v-if="hotSearchData.length" class="hot-search-list">
      <li v-for="(item, index) in hotSearchData" :key="item.id" class="hot-search-item">
        <span class="rank">{{ index + 1 }}</span>
        <div class="item-content">
          <a :href="item.url" target="_blank" class="item-title">{{ item.title }}</a>
          <div class="item-meta">
            <span v-if="item.author" class="item-author">作者: {{ item.author }}</span>
            <span class="item-hot">热度: {{ item.hot }}</span>
          </div>
        </div>
        <img v-if="item.cover" :src="item.cover" alt="Cover" class="item-cover" />
      </li>
    </ul>
    <div v-else-if="!loading && !error" class="no-data">暂无数据</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface HotSearchItem {
  id: string;
  title: string;
  desc: string;
  cover: string;
  author: string;
  timestamp: string | null;
  hot: number;
  url: string;
  mobileUrl: string;
}

interface ApiResponse {
  code: number;
  name: string;
  title: string;
  type: string;
  description: string;
  params: unknown; // 根据提供的数据结构，此处类型不明确，暂时使用 unknown
  link: string;
  total: number;
  updateTime: string;
  fromCache: boolean;
  data: HotSearchItem[];
}

const props = defineProps<{
  appName: string;
  appIcon: string;
  apiUrl: string;
}>();

const hotSearchData = ref<HotSearchItem[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const fetchHotSearchData = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await fetch(props.apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
    hotSearchData.value = data.data;
  } catch (e) {
    if (e instanceof Error) {
      error.value = e;
    } else {
      error.value = new Error('An unknown error occurred');
    }
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchHotSearchData();
});
</script>

<style scoped>
.app-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.app-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.app-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-right: 15px;
  object-fit: cover;
}

.app-name {
  font-size: 1.6em;
  color: #333;
  margin: 0;
}

.loading-indicator,
.error-message,
.no-data {
  text-align: center;
  padding: 20px 0;
  color: #777;
}

.error-message {
  color: #d9534f;
}

.hot-search-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hot-search-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dashed #eee;
}

.hot-search-item:last-child {
  border-bottom: none;
}

.rank {
  font-size: 1.2em;
  font-weight: bold;
  color: #999;
  margin-right: 15px;
  width: 25px;
  text-align: center;
  flex-shrink: 0;
}

.item-content {
  flex-grow: 1;
  margin-right: 10px;
}

.item-title {
  font-size: 1.1em;
  color: #337ab7;
  text-decoration: none;
  transition: color 0.2s;
  display: block; /* Ensures title takes full width */
  margin-bottom: 5px;
}

.item-title:hover {
  color: #23527c;
  text-decoration: underline;
}

.item-meta {
  font-size: 0.9em;
  color: #888;
}

.item-author {
  margin-right: 10px;
}

.item-hot {
  color: #f0ad4e;
}

.item-cover {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-left: 15px;
  flex-shrink: 0;
}
</style>
