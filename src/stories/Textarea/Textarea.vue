<template lang="html">
  <div
    :style="style"
    :class="[
      `lmm-textarea-${color}`,
      {
        'textarea-danger': counter ? value && value.length > counter : false,
        focusx: isFocus,
      },
    ]"
    class="lmm-content-textarea"
  >
    <h4 v-if="label">
      {{ label }}
    </h4>

    <textarea
      :value="value"
      v-bind="$attrs"
      class="lmm-textarea"
      v-on="listeners"
    >
    </textarea>

    <div v-if="counter" class="count lmm-textarea--count">
      {{ value ? value.length : 0 }} / {{ counter }}
    </div>
  </div>
</template>

<script>
import "./Textarea.scss";

export default {
  name: "lmm-textarea",
  inheritAttrs: false,
  props: {
    /**
    Содержимое поля ввода
    */
    value: {
      type: String,
    },
    /**
    Лейбл для поля
    */
    label: {
      default: null,
      type: String,
    },
    color: {
      default: "primary",
      type: String,
    },
    /**
    	Определяет максимальное количество символов.
    */
    counter: {
      default: null,
      type: [Number, String],
    },
    counterDanger: {
      default: false,
      type: Boolean,
    },
    /**
   Установите высоту текстового поля
    */
    height: {
      default: null,
      type: String,
    },
    /**
    Установите ширину текстового поля
    */
    width: {
      default: null,
      type: String,
    },
  },
  data: () => ({
    isFocus: false,
  }),
  computed: {
    style() {
      let style = {};
      style.height = `${this.height}px`;
      style.width = `${this.width}px`;

      return style;
    },
    listeners() {
      return {
        ...this.$listeners,
        input: (evt) => {
          this.$emit("input", evt.target.value);
        },
        focus: () => {
          this.focus();
        },
        blur: () => {
          this.blur();
        },
      };
    },
  },
  watch: {
    value() {
      if (this.value && this.value.length > this.counter) {
        this.$emit("update:counterDanger", true);
      } else {
        this.$emit("update:counterDanger", false);
      }
    },
  },
  methods: {
    focus() {
      this.isFocus = true;
      this.$emit("focus");
    },
    blur() {
      this.isFocus = false;
      this.$emit("blur");
    },
  },
};
</script>
