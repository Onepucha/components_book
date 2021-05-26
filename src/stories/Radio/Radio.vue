<template lang="html">
  <label class="content-lmm-radio" :style="styleLabel" :class="[`lmm-radio-${color}`]">
    <input
      v-bind="$attrs"
      :checked="isChecked"
      :value="value"
      :name="name || value"
      :disabled="disabled"
      type="radio"
      class="lmm-radio--input"
      v-on="listeners"
    />
    <span class="lmm-radio">
      <span :style="styles" class="lmm-radio--border" />
      <span :style="styleCircle" class="lmm-radio--circle" />
    </span>
    <span class="lmm-radio--label">
      <slot />
    </span>
  </label>
</template>

<script>
import "./Radio.scss";

export default {
  name: "lmm-radio",
  props: {
    value: {},
    lmmValue: {},
    name: {},
    disabled: {
      type: Boolean,
    },
    color: {
      type: String,
      default: "primary",
    },
    fontSize: {
      type: Number,
      default: 16,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: () => this.$emit("input", this.lmmValue),
        click: () => this.$emit("input", this.lmmValue),
      };
    },
    attrs() {
      let attrsx = JSON.parse(JSON.stringify(this.$attrs));
      return {
        attrsx,
      };
    },
    isChecked() {
      return this.lmmValue == this.value;
    },
    styles() {
      return {
        border: `2px solid ${
          this.isChecked ? this.color : "rgb(200, 200, 200)"
        }`,
      };
    },
    styleCircle() {
      return {
        "box-shadow": `0px 3px 12px 0px ${this.color}`,
        border: `6px solid ${this.color}`,
      };
    },
    styleLabel() {
      return {
        fontSize: `${this.fontSize}px`,
      };
    },
  },
  methods: {
    giveColor(color, opacity) {
      return color, opacity;
    },
  },
};
</script>
