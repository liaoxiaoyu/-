<template>
  <div class="wrapper">
    <div class="header">
      <!--<img src="../../assets/vux_logo.png" class="avatar"/>-->
    </div>
    <div class="content">
      <group>
        <cell title="孩子昵称"></cell>
        <cell title="孩子出生年月" is-link></cell>
        <cell title="孩子性别" is-link></cell>
        <cell title="与孩子关系" is-link></cell>
      </group>
      <group>
        <cell title="所在地区"></cell>
        <cell title="学段" is-link></cell>
      </group>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'childrenFile'
  }
</script>
<style lang="less">
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .header {
    width: 100%;
    height: 120px;
    background-color: blue;
  }
  .avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
</style>
