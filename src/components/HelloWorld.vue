<template>
  <div class="grid">
    <lmm-row>
      <lmm-col type="flex" justify="center" align="center" Width="12">
        100%
      </lmm-col>
    </lmm-row>
    <lmm-row>
      <lmm-col
        Lg="6"
        Sm="12"
        Xs="12"
        type="flex"
        justify="center"
        align="center"
        Width="6"
      >
        50%
      </lmm-col>
      <lmm-col
        Lg="6"
        Sm="12"
        Xs="12"
        type="flex"
        justify="center"
        align="center"
        Width="6"
      >
        50%
      </lmm-col>
    </lmm-row>
  </div>
</template>

<script>
import lmmRow from "../stories/lmmRow/lmmRow";
import lmmCol from "../stories/lmmCol/lmmCol";

export default {
  name: "HelloWorld",
  components: {
    lmmRow,
    lmmCol
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.grid {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
