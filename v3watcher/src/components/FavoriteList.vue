<template>
  <div>
    <h2>Favorite List</h2>
    <div class="md:px-32 py-8 w-full">
      <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">nom</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Vélos disponibles</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Vélos électriques</th>
              <th>Favoris</th>
            </tr>
          </thead>
          <tbody class="text-gray-700" v-for="(station) in favoriteList" :key="station.id">
            <tr v-show="station.is_online">
              <td class="w-1/3 text-left py-3 px-4">{{station.name}}</td>
              <td class="w-1/3 text-left py-3 px-4">{{station.bike_count}}</td>
              <td class="w-1/3 text-left py-3 px-4">{{station.electric_bike_count}}</td>
              <td class="w-1/3 text-left py-3 px-4">
                <i @click="addToFavorite(station)" class="far fa-star"></i>
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
  computed: {
    favoriteList() {
      return this.$store.state.favoriteList;
    }
  },
  methods: {
    debug: function() {
      console.log(this.favoriteList);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~Style/components/favoriteList";
</style>