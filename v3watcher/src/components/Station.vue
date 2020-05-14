<template>
  <div>
    <div class="md:px-32 py-8 w-full">
      <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">nom</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Vélos disponibles</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Vélos électriques</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Favoris</th>
            </tr>
          </thead>
          <tbody class="text-gray-700" v-for="(station) in stationList" :key="station.id">
            <tr v-show="station.is_online" class="cursor-pointer table-highlighting">
              <td class="w-1/3 text-left py-3 px-4" @click="checkStation(station)">{{station.name}}</td>
              <td
                class="w-1/3 text-left py-3 px-4"
                @click="checkStation(station)"
              >{{station.bike_count}}</td>
              <td
                class="w-1/3 text-left py-3 px-4"
                @click="checkStation(station)"
              >{{station.electric_bike_count}}</td>
              <td class="w-1/3 text-left py-3 px-4">
                <i
                  @click="toggleFavorite(station)"
                  class="fa-star"
                  :class="isFavorite(station) ? 'fas' : 'far'"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    isExpanded: false
  }),
  created() {
    this.$store.commit("updateStations");
  },
  computed: {
    stationList() {
      return this.$store.state.stationList;
    },
    favoriteList() {
      return this.$store.state.favoriteList;
    }
  },
  methods: {
    toggleFavorite: function(station) {
      if (this.isFavorite(station)) {
        this.$store.commit("deleteFavorite", station);
      } else {
        this.$store.commit("addFavorite", station);
      }
    },
    isFavorite: function(station) {
      let resultat = false;
      this.favoriteList.forEach(element => {
        if (element.id == station.id) {
          resultat = true;
        }
      });
      return resultat;
    },
    checkStation: function(station) {
      this.$store.commit("updateStationSelect", station);
      this.$router.push("/map");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~Style/components/table";
</style>