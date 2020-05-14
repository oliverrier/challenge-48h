<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logoV3.png">
    <Map />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    Map: () => import('@/components/Map'),
  }
}
</script>
