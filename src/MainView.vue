<template>
  <TitleBar></TitleBar>
  <main class="container">
    <AppCard
      v-for="app in appList"
      :app-name="app.name"
      :api-url="app.api"
      :key="app.name"
      :app="app"></AppCard>
  </main>
</template>
<script setup lang="ts">
import TitleBar from './components/TitleBar.vue';
import AppCard from './components/AppCard.vue';

const appList = [
  {
    name: '36氪',
    api: '/36kr',
  },
  {
    name: '51cto',
    api: '/51cto',
  },
  {
    name: 'AcFun',
    api: '/acfun',
  },
  {
    name: '百度',
    api: '/baidu',
  },
  {
    name: '哔哩哔哩',
    api: '/bilibili',
  },
  // {
  //   name: '酷安',
  //   api: '/coolapk',
  // },
  {
    name: 'CSDN',
    api: '/csdn',
  },
  {
    name: '豆瓣小组',
    api: '/douban-group',
  },
  {
    name: '豆瓣电影',
    api: '/douban-movie',
  },
  {
    name: '抖音',
    api: '/douyin',
  },
  {
    name: '地震信息',
    api: '/earthquake',
  },
  {
    name: '原神',
    api: '/genshin',
  },
  {
    name: 'HelloGitHub',
    api: '/hellogithub',
  },
  {
    name: '历史上的今天',
    api: '/history',
  },
  {
    name: '崩坏',
    api: '/honkai',
  },
  {
    name: '虎扑',
    api: '/hupu',
  },
  {
    name: '爱范儿',
    api: '/ifanr',
  },
  {
    name: 'IT之家喜加一',
    api: '/ithome-xijiayi',
  },
  {
    name: 'IT之家',
    api: '/ithome',
  },
  {
    name: '简书',
    api: '/jianshu',
  },
  {
    name: '掘金',
    api: '/juejin',
  },
  {
    name: '英雄联盟',
    api: '/lol',
  },
  {
    name: '网易新闻',
    api: '/netease-news',
  },
  {
    name: 'NGA玩家社区',
    api: '/ngabbs',
  },
  {
    name: '腾讯新闻',
    api: '/qq-news',
  },
  {
    name: '新浪新闻',
    api: '/sina-news',
  },
  {
    name: '新浪',
    api: '/sina',
  },
  {
    name: '少数派',
    api: '/sspai',
  },
  {
    name: '星穹铁道',
    api: '/starrail',
  },
  {
    name: '澎湃新闻',
    api: '/thepaper',
  },
  {
    name: '贴吧',
    api: '/tieba',
  },
  {
    name: '今日头条',
    api: '/toutiao',
  },
  {
    name: '气象灾害预警',
    api: '/weatheralarm',
  },
  {
    name: '微信读书',
    api: '/weread',
  },
  {
    name: '知乎日报',
    api: '/zhihu-daily',
  },
  {
    name: '知乎',
    api: '/zhihu',
  },
];
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* 响应式列布局 */
  gap: 20px; /* 卡片之间的间距 */
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  padding-top: 100px; /* 为吸顶的标题栏留出空间 */
  margin: 0 auto; /* 居中显示 */
  min-height: 150vh; /* 确保有足够的滚动内容 */
  margin-bottom: 100px;
}
</style>
