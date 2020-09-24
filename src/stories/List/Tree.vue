<template>
  <div v-if="listType === 'ul'">
    <ul :class="classes">
      <node-tree :node="treeData"></node-tree>
    </ul>
  </div>

  <div v-else-if="listType === 'ol'">
    <ol :class="classes">
      <node-tree :node="treeData"></node-tree>
    </ol>
  </div>
</template>

<script>
import "./list.scss";
import NodeTree from "./NodeTree";

export default {
  props: {
    treeData: Object,
    listType: String,
  },
  components: {
    NodeTree,
  },

  computed: {
    classes() {
      return {
        list: true,
        list_type_ordered: this.listType === "ol",
      };
    },
  },
};
</script>
