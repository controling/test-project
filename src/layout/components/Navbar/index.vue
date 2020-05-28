<template>
  <div class="navbar-container">
    <logo />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
