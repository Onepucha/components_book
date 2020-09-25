<template>
  <ol :class="classes" v-if="listType === 'ol'">
    <template v-for="(item, index) in list">
      <li class="list--item" :key="index" :style="style">{{ item.label }}</li>

      <lmm-list
        :key="index + '__'"
        v-if="item.list && item.list.length"
        :list="item.list"
        :list-type="listType"
      />
    </template>
  </ol>

  <ul :class="classes" v-else-if="listType === 'ul'">
    <template v-for="(item, index) in list">
      <li class="list--item" :key="index" :style="style">{{ item.label }}</li>

      <lmm-list
        :key="index + '__'"
        v-if="item.list && item.list.length"
        :list="item.list"
        :list-type="listType"
      />
    </template>
  </ul>
</template>

<script>
import "./list.scss";

export default {
  name: "lmm-list",

  props: {
    list: {
      type: Array
    },
    listType: {
      type: String
    },
    /**
    Свойство устанвливает цвет фона
    */
    listStyle: {
      type: String
    }
  },
  computed: {
    classes() {
      return {
        list: true,
        list_type_ordered: this.listType === "ol"
      };
    },
    style() {
      return {
        listStyle: this.listStyle
      };
    }
  }
};
</script>
