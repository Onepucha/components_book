<template>
  <ol class="list list_type_ordered">
    <template v-for="(item, index) in list">
      <li class="list--item" :key="index">{{ item.label }}</li>

      <List
        :key="index + '__'"
        v-if="item.list && item.list.length"
        :list="item.list"
      />
    </template>
  </ol>
</template>

<script>
import "./List.scss";

export default {
  name: "List",

  props: {
    list: {
      type: Array
    }
  }
};
</script>
