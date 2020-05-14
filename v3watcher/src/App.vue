<template>
  <div id="app">
    <Navbar />
    <div class="pt-32 flex w-full justify-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
  }
}
</script>

<style lang="scss">
  html, body {
  @apply w-full h-full;
  }
</style>