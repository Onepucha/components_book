<template>
  <div
    :class="{ 'open-item': maxHeight != '0px', disabledx: disabled }"
    class="lmm-collapse-item"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <header class="lmm-collapse-item--header" @click="toggleContent">
      <slot name="header"></slot>
      <span v-if="!notArrow" class="icon-header lmm-collapse-item--icon-header">
        <i class="icon material-icons">{{ iconArrow }}</i>
      </span>
    </header>
    <div ref="content" :style="styleContent" class="lmm-collapse-item--content">
      <div class="con-content--item">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import "./Collapse.scss";

export default {
  name: "lmmCollapseItem",
  props: {
    open: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    notArrow: {
      default: false,
      type: Boolean
    },
    iconArrow: {
      default: "keyboard_arrow_down",
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    sst: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    maxHeight: "0px",
    // only used for sst
    dataReady: false
  }),
  computed: {
    accordion() {
      return this.$parent.accordion;
    },
    openHover() {
      return this.$parent.openHover;
    },
    styleContent() {
      return {
        maxHeight: this.maxHeight
      };
    }
  },
  watch: {
    maxHeight() {
      this.$parent.emitChange();
    },
    ready(newVal, oldVal) {
      if (oldVal != newVal && newVal) {
        this.initMaxHeight();
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.changeHeight);
    const maxHeightx = this.$refs.content.scrollHeight;
    if (this.open) {
      this.maxHeight = `${maxHeightx}px`;
    }
  },
  methods: {
    changeHeight() {
      const maxHeightx = this.$refs.content.scrollHeight;
      if (this.maxHeight != "0px") {
        this.maxHeight = `${maxHeightx}px`;
      }
    },
    toggleContent() {
      if (this.openHover || this.disabled) return;

      if (this.accordion) {
        this.$parent.closeAllItems(this.$el);
      }

      if (this.sst && !this.dataReady) {
        this.$emit("fetch", {
          done: () => {
            this.initMaxHeight();
            this.dataReady = true;
          }
        });
      } else {
        this.initMaxHeight();
      }
    },
    initMaxHeight() {
      const maxHeightx = this.$refs.content.scrollHeight;
      if (this.maxHeight == "0px") {
        this.maxHeight = `${maxHeightx}px`;
      } else {
        this.maxHeight = `0px`;
      }
    },
    mouseover() {
      if (this.disabled) return;
      let maxHeightx = this.$refs.content.scrollHeight;
      if (this.openHover) {
        this.maxHeight = `${maxHeightx}px`;
      }
    },
    mouseout() {
      if (this.openHover) {
        this.maxHeight = `0px`;
      }
    }
  }
};
</script>
