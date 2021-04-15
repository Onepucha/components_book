<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout
  }
}
</script>


<style lang="scss">
@import '~materialize-css/sass/materialize.scss';
@import '~materialize-css/sass/components/icons-material-design';
</style>

<style>
  @import 'assets/index.css';
</style>
