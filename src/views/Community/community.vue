<template>
  <div class="container">
    <tab :bar-active-color="'#1296db'"  :active-color="'#1296db'" :custom-bar-width="'50'">
      <tab-item selected >首页</tab-item>
      <tab-item>分享</tab-item>
      <tab-item>问答</tab-item>
    </tab>
    <div class="post-lists">
        <li class="list" v-for="(item, key) in posts">
          <div class="author">
            <img class="avatar" src="../../assets/logo.png"/>
            <div class="info">
              <p class="name">{{ item.name }}</p>
              <span class="common">{{ item.address }}</span>
              <span class="common">{{ item.class }}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="title">{{ item.title }}</h4>
            <div class="detail">
              {{ item.detail }}
            </div>
          </div>
        </li>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'community',
    data() {
      return {
        posts: [{
          avatar: '../../assets/logo.png',
          name: 'liaoyiyu',
          class: '幼儿园',
          address: '广州',
          title: 'test',
          detail: 'XXXXXXXXXXXXXXXXXX'
        }, {
          avatar: '../../assets/logo.png',
          name: 'liaoyiyu',
          class: '幼儿园',
          address: '广州',
          title: 'test',
          detail: 'XXXXXXXXXXXX'
        }, {
          avatar: '../../assets/logo.png',
          name: 'liaoyiyu',
          class: '幼儿园',
          address: '广州',
          title: 'test',
          detail: 'XXXXXXXXXXXX'
        }, {
          avatar: '../../assets/logo.png',
          name: 'liaoyiyu',
          class: '幼儿园',
          address: '广州',
          title: 'test',
          detail: 'XXXXXXXXXXXX'
        }]
      }
    }
  }
</script>
<style lang="less">
  .container {
    width: 100%;
    box-sizing: border-box;

  }
  .post-lists {
    width: 100%;
    height: 90px;
    padding-top: 20px;
    box-sizing: border-box;
  }
  .list {
    list-style-type:none;
    margin-bottom: 10px;
    background-color: #fff;
    padding-left: 16px;
    padding-top: 5px;
    box-shadow: 0px 2px 2px #E5E5E5;
  }
  .author {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    margin-bottom: 3px;
  }
  .avatar {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .info {
    flex: 1;
    height: 100%;
    padding-left: 10px;
  }
  .name {
    font-size: 15px;
    width: 100%;
    height: 18px;
  }
  .common {
    font-size: 10px;
    color: #999999;
    line-height: 1em;
    width: 50px;
    height: 18px;
  }
  .content {
    width: 100%;
    padding-bottom: 10px;
  }
  .title {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .detail {
    color: #999999;
    font-size: 13px;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>
