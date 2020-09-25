<template>
  <div id="app">
    <List :list="list" />
  </div>
</template>

<script>
import List from "./components/List";
export default {
  components: { List },
  data() {
    return {
      list: [
        {
          label: "label",
          list: [
            {
              label: "label 1.1"
            },
            {
              label: "label 1.2"
            }
          ]
        },
        {
          label: "label 2",
          list: [
            { label: "label 2.1" },
            {
              label: "label 2.2",
              list: [
                {
                  label: "label 2.2.1"
                },
                {
                  label: "label 2.2.2"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
