<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logoV3.png" />
    <button @click="monTest">test</button>
    <Map />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Map: () => import("@/components/Map")
  },
  created() {
    this.$store.commit("updateStations");
  },
  computed: {
    listeStations() {
      return this.$store.state.listeStations;
    }
  },
  methods: {
    monTest: function() {
      console.log(this.listeStations);
    }
  }
};
</script>
