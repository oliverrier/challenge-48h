<template>
  <div>
    <h2 class="favorite-list-header">Liste de Favori</h2>
    <div class="md:px-32 py-8 w-full">
      <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="favorite-list-th">nom</th>
              <th class="favorite-list-th">Vélos disponibles</th>
              <th class="favorite-list-th">Vélos électriques</th>
              <th class="favorite-list-th">Favoris</th>
            </tr>
          </thead>
          <tbody class="favorite-list-tbody" v-for="(station) in favoriteList" :key="station.id">
            <tr v-show="station.is_online" class="cursor-pointer favorite-list-td">
              <td @click="checkStation(station)">{{station.name}}</td>
              <td @click="checkStation(station)">{{station.bike_count}}</td>
              <td @click="checkStation(station)">{{station.electric_bike_count}}</td>
              <td>
                <button
                  class="favorite-list-delete-button"
                  @click="deleteFavorite(station)"
                >SUPPRIMER</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button
      class="favorite-list-delete-button-all"
      @click="deleteAllFavorite"
    >SUPPRIMER TOUS LES FAVORIS</button>
  </div>
</template>

<script>
export default {
  computed: {
    favoriteList() {
      return this.$store.state.favoriteList;
    }
  },
  methods: {
    deleteFavorite: function(station) {
      this.$store.commit("deleteFavorite", station);
    },
    deleteAllFavorite: function() {
      this.$store.commit("deleteAllFavorite");
    },
    checkStation: function(station) {
      this.$store.commit("updateStationSelect", station);
      this.$router.push("/map");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~Style/components/favoriteList";
</style>