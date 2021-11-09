<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: {
    }
  }
</script>

<style scoped lang="scss">
  @import 'assets/auth.scss';
  @import "stories/variables.scss";
</style>
