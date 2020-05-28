<template>
  <div class="navbar-logo-container">
    <router-link key="expand" class="navbar-logo-link" to="/">
      <img :src="logo" class="navbar-logo">
      <h1 class="navbar-title">{{ title }} </h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavbarLogo',
  data() {
    return {
      title: '系统名称',
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-logo-container {
  position: relative;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  background: transparent;
  text-align: left;
  margin-left: 16px;
  overflow: hidden;

  & .navbar-logo-link {
    height: 100%;
    width: 100%;

    & .navbar-logo {
      width: 36px;
      height: 36px;
      vertical-align: middle;
      margin-right: 16px;
    }

    & .navbar-title {
      display: inline-block;
      margin: 0;
      font-size: 18px;
      vertical-align: middle;
    }
  }
}
</style>
