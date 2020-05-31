<template>
  <div class="navbar-container">
    <logo class="navbar-logo-container" />
    <right-menu class="right-menu" />
  </div>
</template>

<script>
import Logo from './Logo'
import RightMenu from './RightMenu'

export default {
  naem: 'Navbar',
  components: {
    Logo,
    RightMenu
  }

}
</script>
