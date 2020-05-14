<template>
  <div>
    <p>Salut</p>
    <p>Salut</p>
    <p>Salut</p>


    <p>Salut</p>
    <p>Salut</p>

    <p>Salut</p>

    <p>Salut</p>
    <table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">Nom</th>
      <th class="px-4 py-2">Vélos disponibles</th>
      <th class="px-4 py-2">Vélos electroniques</th>
    </tr>
  </thead>
  <tbody>
    <div v-for="(station) in stationList" :key="station.id"> 
        <tr v-show="station.is_online">
            <td class="border px-4 py-2">{{station.name}}</td>
            <td class="border px-4 py-2">{{station.bike_count}}</td>
            <td class="border px-4 py-2">{{station.electric_bike_count}}</td>
        </tr>
    </div>
  </tbody>
</table>

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

<style lang="scss" scoped>
  @import '~Style/main';
</style>