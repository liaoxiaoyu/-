<template>
  <div class="container">
    <group>
      <cell is-link>
        <img slot="icon" style="height: 56px; height: 56px; border-radius: 50%" src="../../assets/vux_logo.png"></img>
        <div slot="title">
          <span style="margin-left: 16px; font-size: 22px">test name</span>
          <span style="padding-left: 16px; display: block; font-size: 10px; color: gray">查看或编辑个人信息</span>
        </div>
      </cell>
    </group>

    <group>
      <cell title="孩子档案" is-link :link="{path:'/childrenFile'}"></cell>
      <cell title="打卡签到" is-link></cell>
    </group>

    <group>
      <cell title="我的发布" is-link></cell>
    </group>

    <group>
      <cell title="成长日志" is-link></cell>
      <cell title="浏览记录" is-link></cell>
      <cell title="历史推送" is-link></cell>
    </group>
    <group>
      <cell title="帮助与反馈" is-link></cell>
      <cell title="账号设置" is-link></cell>
    </group>
  </div>
</template>
<script>
  export default {
    name: 'userInfo'
  }
</script>
