<template>
  <p :class="classes" :style="style">{{ text }}</p>
</template>
<script>
import "./BodyText.scss";

export default {
  name: "lmm-paragrap",

  props: {
    /**
    Произвольный текст
    */
    text: {
      default: null,
      type: String,
    },
    /**
    Размер компонента текст
    */
    size: {
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
      default: 'dark',
      type: String,
    },
    fontStyle: {
      default: null,
      type: String,
    },
    decoration: {
      default: null,
      type: String,
    },
    transform: {
      default: null,
      type: String,
    },
    align: {
      default: null,
      type: String,
    }
  },

  computed: {
    classes() {
      return {
        paragrap: true,
        [`paragrap--${this.size}`]: true,
        [`paragrap--${this.textColor}`]: true,
        [`paragrap--${this.fontStyle}`]: true,
        [`paragrap--${this.decoration}`]: true,
        [`paragrap--${this.transform}`]: true,
        [`paragrap--${this.align}`]: true,
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
