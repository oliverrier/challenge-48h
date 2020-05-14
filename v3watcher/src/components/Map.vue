
<template>
  <div ref="map" id="map">
    <img :src="link">
  </div>
</template>

<script>
export default {
  computed: {
    link: function(){
      let latitude = this.station.latitude;
      let longitude = this.station.longitude;
      const zoom = 16;
      let label = this.station.name;
      let firstLetter = label.toUpperCase().slice(0,1);
      return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&format=png&size=1000x500&markers=color:red%7Clabel:${firstLetter}%7C${latitude},${longitude}&maptype=roadmap&key=AIzaSyD4sJT9QqmWldPRlgemuuMoUzXLVf81pZg`
    },
  station: function(){
    return this.$store.state.stationSelect
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
