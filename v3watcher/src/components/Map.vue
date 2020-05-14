
<template>
  <div ref="map" id="map">
    <img :src="link">
  </div>
</template>

<script>
export default {
  data: () => ({
    latitude: 44.8380300,
    longitude: -0.5843700,
    zoom: 16,
    label: "M"

  }),
  computed: {
    link: function(){
      return `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=${this.zoom}&format=png&size=1000x500&markers=color:red%7Clabel:${this.label}%7C${this.latitude},${this.longitude}&maptype=roadmap&key=AIzaSyD4sJT9QqmWldPRlgemuuMoUzXLVf81pZg`
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
