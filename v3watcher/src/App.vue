<template>
  <div id="app">
    <Navbar />
    <div class="pt-32 flex w-full justify-center">
      <router-view id="view"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Navbar: () => import("@/components/Navbar.vue")
  }
};
</script>

<style lang="scss">
  html,
  body {
    @apply w-full h-full;
  };
  #view {
    height: calc(100vh - 128px);
    width: 100vw;
  }
</style>