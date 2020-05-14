<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4sJT9QqmWldPRlgemuuMoUzXLVf81pZg&callback=initMap" async defer></script>
<script>
export default {
  data: () => ({
    map: null,
  }),
  methods: {
    initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }
  }

}
</script>


<style>
/* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        background-color: aqua;
        width: 100%;
        height: 100%;
      }
</style>