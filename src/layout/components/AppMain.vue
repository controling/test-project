<template>
  <section class="app-main">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.app-main {
  height: calc(100vh - #{$navBarHeight} - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 20px;
}
</style>
