<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item :link="{path: '/'}">
        <img slot="icon" src="./assets/icon/community.png">
        <img slot="icon-active" src="./assets/icon/community_active.png">
        <span slot="label">社区</span>
      </tabbar-item>
      <tabbar-item :link="{path: '/growSquare'}">
        <img slot="icon" src="./assets/icon/grow.png">
        <img slot="icon-active" src="./assets/icon/grow_active.png">
        <span slot="label">成长广场</span>
      </tabbar-item>
      <tabbar-item selected :link="{path: '/news'}">
        <img slot="icon" src="./assets/icon/news.png">
        <img slot="icon-active" src="./assets/icon/news_active.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item :link="{path: '/user'}">
        <img slot="icon" src="./assets/icon/my.png">
        <img slot="icon-active" src="./assets/icon/my_active.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
