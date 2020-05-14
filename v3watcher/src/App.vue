<template>
  <div id="app">
    <Navbar />
    <Map />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Map: () => import('@/components/Map.vue'),
    Navbar: () => import('@/components/Navbar.vue'),
  }
}
</script>