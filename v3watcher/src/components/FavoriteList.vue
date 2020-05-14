<template>
  <div>
    <h2> Favorite List </h2>
      {{favoriteList}}
      <p>Saucisse</p>
  </div>
</template>

<script>
export default {
  data: () => {
  },
  computed: {
    favoriteList() {
      this.$store.commit('addFavorite', {
      id: 1,
      name: "Meriadeck",
      bike_count: 8,
      electric_bike_count: 9,
      bike_count_total: 17,
      slot_count: 16,
      is_online: true,
      latitude: "44.8380300",
      longitude: "-0.5843700"
    },)
      return this.$store.state.favoriteList;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~Style/components/favoriteList';
</style>