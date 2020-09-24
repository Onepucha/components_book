<template>
  <li class="list--item">
    <span class="label">{{ node.label }}</span>

    <ul v-if="node.children && node.children.length">
      <node
        v-for="(child, key, index) in node.children"
        :node="child"
        :key="index"
      ></node>
    </ul>
  </li>
</template>

<script>
import "./list.scss";

export default {
  name: "node",
  props: {
    node: Object,
  },
};
</script>
