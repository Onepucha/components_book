<template>
  <div :class="[type]" class="lmm-collapse">
    <slot></slot>
  </div>
</template>
<script>
import "./Collapse.scss";

export default {
  name: "lmmCollapse",
  props: {
    accordion: {
      default: false,
      type: Boolean
    },
    type: {
      default: "default",
      type: String
    },
    openHover: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    parent() {
      return this;
    }
  },
  methods: {
    emitChange() {
      this.$emit("change");
    },
    closeAllItems(el) {
      let children = this.$children;
      children.map(item => {
        if (item.$el !== el) {
          item.maxHeight = "0px";
        }
      });
    }
  }
};
</script>
