<template>
  <div>
    <p>Salut</p>
    <p>Salut</p>
    <p>Salut</p>


    <p>Salut</p>
    <p>Salut</p>

    <p>Salut</p>

    <p>Salut</p>
    <div v-for="(station) in stationList" :key="station.id"> 
        <p v-show="station.is_online">
            {{station.name + " " + station.bike_count + " " + station.electric_bike_count}} 
            <button>Favoris</button>
        </p>
    </div>


  </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    isExpanded: false,
  }),
  computed: {
    stationList() {
      return this.$store.state.stationList;
    }
  }
}
</script>

<style>
</style>