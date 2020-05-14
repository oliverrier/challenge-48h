<template>
  <div>
    <h2> Favorite List </h2>
    
  </div>
</template>

<script>
export default {
  data: () => {
  },
  computed: {
    favoriteList() {
      return this.$store.state.favoriteList;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~Style/components/favoriteList';
</style>