<template lang="html">
  <div class="content-lmm-checkbox" :style="styleLabel">
    <input
      v-bind="$attrs"
      :checked="isChecked || $attrs.checked"
      :value="value"
      type="checkbox"
      class="lmm-checkbox--input"
      v-on="listeners"
      :disabled="disabled"
    />
    <span :style="style" class="checkbox_x lmm-checkbox">
      <span :style="style_check" class="lmm-checkbox--check">
        <!-- <lmm-icon :icon="icon" :icon-pack="iconPack" class="lmm-checkbox--icon" /> -->
        <i class="icon material-icons" :class="classesIcon" v-if="icon">{{
          icon
        }}</i>
      </span>
    </span>
    <span class="content-slot-label">
      <slot />
    </span>
  </div>
</template>

<script>
import "./Checkbox.scss";

export default {
  name: "lmm-checkbox",
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: "rgb(0, 92, 254)",
    },
    value: {},
    icon: {
      default: "check",
      type: String,
    },
    lmmValue: {},
    fontSize: {
      type: Number,
      default: 16,
    },
    disabled: {
      type: Boolean,
    },
  },
  computed: {
    style_check() {
      return {
        background: this.isChecked ? this.color : null,
      };
    },
    style() {
      return {
        border: `2px solid ${
          this.isChecked ? this.color : "rgb(180, 180, 180)"
        }`,
      };
    },
    classesIcon() {
      return {
        [`${this.icon} material-icons`]: true,
      };
    },
    listeners() {
      return {
        change: (evt) => {
          this.toggleValue(evt);
        },
      };
    },
    isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.value;
    },
    styleLabel() {
      return {
        fontSize: `${this.fontSize}px`,
      };
    },
  },
  methods: {
    giveColor(color) {
      return color;
    },
    toggleValue(evt) {
      if (this.isArrayx()) {
        this.setArray();
      } else if (typeof this.lmmValue == "string") {
        this.setValueString();
      } else {
        this.$emit("input", !this.value);
        this.$emit("change", evt);
      }
    },
    setArray() {
      const value = this.value.slice(0);
      if (this.isArrayIncludes()) {
        value.splice(value.indexOf(this.lmmValue), 1);
        this.$emit("input", value);
        this.$emit("change", value);
      } else {
        value.push(this.lmmValue);
        this.$emit("input", value);
        this.$emit("change", value);
      }
    },
    setValueString() {
      if (this.value == this.lmmValue) {
        this.$emit("input", null);
        this.$emit("change", null);
      } else {
        this.$emit("input", this.lmmValue);
        this.$emit("change", this.lmmValue);
      }
    },
    isArrayIncludes() {
      let modelx = this.value;
      let value = this.lmmValue;
      return modelx.includes(value);
    },
    isArrayx() {
      return Array.isArray(this.value);
    },
  },
};
</script>
