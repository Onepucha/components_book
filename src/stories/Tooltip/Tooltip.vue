<template>
  <div class="centerx">
    <div ref="convstooltip" class="con-lmm-tooltip" @mouseleave="mouseleavex"
      @mouseenter="mouseenterx">
      <button class="button button--primary button--medium">Button</button>
      <transition name="tooltip-fade">
        <div v-show="activeTooltip" ref="vstooltip" :class="[
            `lmm-tooltip-${positionx || position}`,
            `lmm-tooltip-${color}`,
            { 'after-none': noneAfter },
          ]" :style="style" class="lmm-tooltip">
          <h4 v-if="title">{{ title }}</h4>
          <p>{{ text }}</p>
        </div>
      </transition>
    </div>
</div>
</template>
<script>
  import utils from '../../utils';
  import Button from '../Button/Button.vue';
  import "./Tooltip.scss";

  export default {
    components: Button,
    name: "lmm-tooltip",

    props: {
      title: {
        default: null,
        type: String,
      },
      text: {
        default: null,
        type: String,
      },
      color: {
        default: 'primary',
        type: String,
      },
      position: {
        default: "top",
        type: String,
      },
      delay: {
        default: "0s",
        type: [Number, String],
      },
      widthx: {
        default: "auto",
        type: [Number, String],
      },
      active: {
        default: true,
        type: Boolean,
      },
      value: {
        default: false,
        type: Boolean,
      },
    },
    data() {
      return {
        cords: {},
        activeTooltip: this.value,
        positionx: null,
        noneAfter: false,
      };
    },
    computed: {
      style() {
        return {
          left: this.cords.left,
          top: this.cords.top,
          transitionDelay: this.activeTooltip ? this.delay : "0s",
          background: this.color,
          width: `${this.widthx}px`,
        };
      },
    },
    watch: {
      value(val) {
        this.activeTooltip = val;
      },
      activeTooltip(val) {
        if (this.value !== val) {
          this.$emit('input', val)
        }
      }
    },
    mounted() {},
    updated() {
      // if (!this.$slots.default) {
      //   this.activeTooltip = false;
      // }
    },
    beforeDestroy() {
      if (this.$refs.vstooltip && this.activeTooltip) {
        utils.removeBody(this.$refs.vstooltip)
      }
    },
    methods: {
      mouseenterx() {
        if (this.active) {
          this.activeTooltip = true;
          this.$nextTick(() => {
            utils.insertBody(this.$refs.vstooltip)
            this.changePosition(this.$refs.convstooltip, this.$refs.vstooltip)
          })
        }
      },
      mouseleavex() {
        this.activeTooltip = false;
      },
      changePosition(elxEvent, tooltip) {
        this.noneAfter = false;
        this.positionx = null;
        let elx = elxEvent.closest(".con-lmm-tooltip");
        let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
        let topx =
          elx.getBoundingClientRect().top + scrollTopx - tooltip.clientHeight - 4;
        let leftx =
          elx.getBoundingClientRect().left -
          tooltip.clientWidth / 2 +
          elx.clientWidth / 2;
        let widthx = elx.clientWidth;

        if (this.position === "bottom") {
          topx =
            elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
        } else if (this.position === "left") {
          leftx = elx.getBoundingClientRect().left - tooltip.clientWidth - 4;
          topx =
            elx.getBoundingClientRect().top +
            scrollTopx +
            elx.clientHeight / 2 -
            tooltip.clientHeight / 2;
          if (Math.sign(leftx) === -1) {
            leftx = elx.getBoundingClientRect().left;
            topx =
              elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
            this.positionx = "bottom";
            this.noneAfter = true;
          }
        } else if (this.position === "right") {
          leftx = elx.getBoundingClientRect().left + elx.clientWidth + 4;
          topx =
            elx.getBoundingClientRect().top +
            scrollTopx +
            elx.clientHeight / 2 -
            tooltip.clientHeight / 2;
          if (window.innerWidth - (leftx + tooltip.clientWidth) <= 20) {
            leftx =
              elx.getBoundingClientRect().left - tooltip.clientWidth / 2 - 10;
            topx =
              elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
            this.positionx = "bottom";
            this.noneAfter = true;
          }
        }

        this.cords = {
          left: `${leftx}px`,
          top: `${topx}px`,
          width: `${widthx}px`,
        };
      },
    },
  };
</script>