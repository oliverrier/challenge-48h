
<template>
  <div ref="map" id="map">
    <img :src="link">
  </div>
</template>

<script>
export default {
  data: () => ({
    latitude: this.$store.state.stationSelect.latitude,
    longitude: this.$store.state.stationSelect.longitude,
    zoom: 16,
    label: this.$store.state.stationSelect.label

  }),
  computed: {
    link: function(){
      let firstLetter = this.label.toUpperCase().slice(0,1);
      return `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=${this.zoom}&format=png&size=1000x500&markers=color:red%7Clabel:${firstLetter}%7C${this.latitude},${this.longitude}&maptype=roadmap&key=AIzaSyD4sJT9QqmWldPRlgemuuMoUzXLVf81pZg`
    }
  }
  
}
</script>


<style>
  #map {
    height: calc(100vh - 128px);
    width: 100vw;
  }
</style>
