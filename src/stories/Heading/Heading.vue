<template>
  <div :class="classes" :style="style">{{ title }}</div>
</template>
<script>
import "./Heading.scss";

export default {
  name: "lmm-heading",

  props: {
    /**
    Текст заголовка
    */
    title: {
      default: null,
      type: String,
    },
    /**
    Размер компонента заголовок
    */
    size: {
      type: String,
      default: "xl",
      validator: function(value) {
        return ["xl", "l", "m", "s", "xs"].indexOf(value) !== -1;
      },
    },
    /**
    Размер нижнего отступа заголовок
    */
    margins: {
      type: String,
      default: "xl",
      validator: function(value) {
        return ["xl", "l", "m", "s", "xs"].indexOf(value) !== -1;
      },
    },
    /**
    Свойство устанавливает цвет текста
    */
    textColor: {
      default: null,
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        heading: true,
        [`heading--${this.size}`]: true,
        [`margins--${this.margins}`]: true,
      };
    },
    style() {
      return {
        color: this.textColor,
      };
    },
  },
};
</script>
