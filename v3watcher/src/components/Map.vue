
<template>
  <div ref="map" id="map">
    <div class="flex items-stretch h-24">
      <div class="flex-1 px-4 py-2 m-2">
        <img class="w-full" :src="link" />
      </div>
      <div class="flex-1 text-center px-4 py-20 m-2">
        <div class="md:px-32 py-8 w-full">
          <div class="shadow overflow-hidden rounded border-b border-gray-200">
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
              <tbody class="text-gray-700">
                <tr>
                  <td class="w-1/3 text-left py-3 px-4">{{station.name}}</td>
                  <td class="w-1/3 text-left py-3 px-4">{{station.bike_count}}</td>
                  <td class="w-1/3 text-left py-3 px-4">{{station.electric_bike_count}}</td>
                  <td class="w-1/3 text-left py-3 px-4">{{station.slot_count}}</td>
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
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    link: function() {
      let latitude = this.station.latitude;
      let longitude = this.station.longitude;
      const zoom = 16;
      let label = this.station.name;
      let firstLetter = label.toUpperCase().slice(0,1);
      return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&format=png&size=640x500&markers=color:red%7Clabel:${firstLetter}%7C${latitude},${longitude}&maptype=roadmap&key=AIzaSyD4sJT9QqmWldPRlgemuuMoUzXLVf81pZg`
    },
    station: function() {
      return this.$store.state.stationSelect;
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


<style>
#map {
  height: calc(100vh - 128px);
  width: 100vw;
}
</style>
