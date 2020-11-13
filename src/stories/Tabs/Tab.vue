<template lang="html">
  <transition
    :name="
      invert
        ? vertical
          ? 'fade-tab-vertical-invert'
          : 'fade-tab-invert'
        : vertical
        ? 'fade-tab-vertical'
        : 'fade-tab'
    "
  >
    <div v-if="active" class="con-tab lmm-tabs--content">
      <slot />
    </div>
  </transition>
</template>

<script>
import "./Tabs.scss";

export default {
  name: "lmmTab",
  inheritAttrs: false,
  props: {
    label: {
      default: "Label",
      type: String,
    },
    icon: {
      default: "",
      type: String,
    },
    tag: {
      default: "",
      type: String,
    },
    iconPack: {
      type: String,
      default: "material-icons",
    },
  },
  data: () => ({
    vertical: false,
    active: false,
    id: null,
    invert: false,
  }),
  watch: {
    label(val) {
      this.$parent.children[this.id].label = val;
    },
    $attrs(val) {
      this.$parent.children[this.id].attrs = val;
    },
  },

};
</script>
