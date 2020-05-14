<template>
  <div id="app">
    <Navbar />
    <router-view />
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