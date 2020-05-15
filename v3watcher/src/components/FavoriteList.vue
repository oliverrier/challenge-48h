<template>
  <div>
    <h2 class="favorite-list-header">Liste de Favori</h2>
    <div class="inline-block ml-auto justify-end">
      <label for="rowsPerPage">Stations par page</label>
      <select
        class="p-1 rounded border border-gray-300 bg-white mx-4"
        id="rowsPerPage"
        v-model="currentPerPage"
      >
        <option v-for="(opt, index) in perPage" :key="opt" :value="index">{{ opt }}</option>
      </select>
    </div>
    <div class="md:px-32 py-8 w-full">
      <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="favorite-list-th">nom</th>
              <th class="favorite-list-th">Vélos disponibles</th>
              <th class="favorite-list-th">Vélos électriques</th>
              <th class="favorite-list-th">Places disponibles</th>
              <th class="favorite-list-th">Favoris</th>
            </tr>
          </thead>
          <tbody class="favorite-list-tbody" v-for="(station) in data.data" :key="station.id">
            <tr
              :class="station.is_online ? 'cursor-pointer table-highlighting' : 'bg-gray-600 cursor-not-allowed'"
            >
              <td class="favorite-list-td"
              :class="station.is_online ? '' : 'text-red-500'"
              @click="station.is_online ? checkStation(station) : null">{{station.is_online ?
               station.name 
               : station.name + " (Station indisponible)"
               }}</td>
              <td class="favorite-list-td" @click="station.is_online ? checkStation(station) : null">{{station.bike_count}}</td>
              <td
                class="favorite-list-td"
                 @click="station.is_online ? checkStation(station) : null"
              >{{station.electric_bike_count}}</td>
              <td
                class="favorite-list-td"
                @click="station.is_online ? checkStation(station) : null"
              >{{station.slot_count}}</td>
              <td class="favorite-list-td">
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
    <div class="flex items-center mt-2">
      <div class="ml-auto">
        <label for="currentPage">Page</label>
        <button
          :class="['mr-2 focus:outline-none', currentPage == 1 ? 'text-gray-400' : '']"
          @click="currentPage = currentPage > 1 ? currentPage - 1 : currentPage"
          :disabled="currentPage == 1"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <input
          type="text"
          id="currentPage"
          class="p-1 border rounded border-gray-300 focus:outline-none focus:shadow w-12 text-right"
          v-model="currentPage"
        />
        <button
          :class="['ml-2 focus:outline-none', currentPage == data.totalPages ? 'text-gray-400' : '']"
          @click="currentPage = currentPage < data.totalPages ? currentPage + 1 : currentPage"
          :disabled="currentPage == data.totalPages"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
        <span class="mx-6">Pages totales : {{ data.totalPages }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { chunk } from "lodash";

export default {
  data: () => ({
    selected: [],
    currentPerPage: 0,
    currentPage: 1,
    perPage: [5, 10, 15]
  }),
  computed: {
    favoriteList() {
      return this.$store.state.favoriteList;
    },
    data() {
      const chunkedData = chunk(
        this.favoriteList,
        this.perPage[this.getIndexForArray(this.currentPerPage, this.perPage)]
      );
      return {
        data:
          chunkedData[this.getIndexForArray(this.currentPage - 1, chunkedData)],
        totalPages: chunkedData.length
      };
    }
  },
  methods: {
    checkStation: function(station) {
      this.$store.commit("updateStationSelect", station);
      this.$router.push("/map");
    },
    deleteFavorite: function(station) {
      this.$store.commit("deleteFavorite", station);
    },
    deleteAllFavorite: function() {
      this.$store.commit("deleteAllFavorite");
    },
    getIndexForArray(index, array) {
      return index >= 0 && index < array.length ? index : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~Style/components/favoriteList";
</style>