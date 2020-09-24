<template>
  <div :class="classes" :style="style" :status="status">{{ text }}</div>
</template>
<script>
import "./Badge.scss";

export default {
  name: "lmm-badge",

  props: {
    /**
    Статусы значка: 'positive' 'negative' 'neutral' 'error' 'warning' 
    */
    status: {
      type: String,
      default: "neutral",
    },
    /**
    Произвольный текст
    */
    text: {
      default: null,
      type: String,
    },
    /**
    Свойство устанвливает цвет фона
    */
    backgroundColor: {
      type: String,
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
        badge: true,
        [`badge--${this.status}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.textColor,
      };
    },
  },
};
</script>
