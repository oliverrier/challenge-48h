<template>
  <div>
    <div class="p-2 ml-auto">
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
        <input v-model="stationSearch" placeholder="Recherche par nom" @input="searchStation" />

        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">nom</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Vélos disponibles</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Vélos électriques</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Places disponibles</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Favoris</th>
            </tr>
          </thead>
          <tbody
            class="text-gray-700"
            v-for="(station) in stationSearch == '' ? data.data : stationList"
            :key="station.id"
          >
            <tr
              :class="station.is_online ? 'cursor-pointer table-highlighting' : 'bg-gray-600 cursor-not-allowed'"
              v-show="stationIsVisible(station.name)"
            >
              <td class="w-1/3 text-left py-3 px-4"
              :class="station.is_online ? '' : 'text-red-500'"
              @click="station.is_online ? checkStation(station) : null">{{station.is_online ?
               station.name 
               : station.name + " (Station indisponible)"
               }}</td>
              <td
                class="w-1/3 text-left py-3 px-4"
                @click="station.is_online ? checkStation(station) : null"
              >{{station.bike_count}}</td>
              <td
                class="w-1/3 text-left py-3 px-4"
                @click="station.is_online ? checkStation(station) : null"
              >{{station.electric_bike_count}}</td>
              <td
                class="w-1/3 text-left py-3 px-4"
                @click="checkStation(station)"
              >{{station.slot_count}}</td>
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
    <div class="flex items-center my-2">
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
  components: {},
  data: () => ({
    selected: [],
    currentPerPage: 0,
    currentPage: 1,
    perPage: [5, 10, 15],
    stationSearch: ""
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
    },
    data() {
      const chunkedData = chunk(
        this.stationList,
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
    },
    getIndexForArray(index, array) {
      return index >= 0 && index < array.length ? index : 0;
    },
    stationIsVisible(stationName) {
      let resultat = false;
      if (this.stationSearch == "") {
        resultat = true;
      } else {
        if (
          stationName.toLowerCase().includes(this.stationSearch.toLowerCase())
        ) {
          resultat = true;
        }
      }
      return resultat;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~Style/components/table";
</style>