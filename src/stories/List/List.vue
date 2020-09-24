<template>
  <div>
    <tree :tree-data="tree" :list-type="typeList"></tree>
  </div>
</template>

<script>
import Tree from "./Tree";
import "./list.scss";

export default {
  name: "lmm-list",

  components: {
    Tree,
  },

  props: {
    tree: {
      type: Object,
    },
    typeList: String,
  },
};
</script>
