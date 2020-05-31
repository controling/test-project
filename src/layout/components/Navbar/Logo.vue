<template>
  <div>
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
