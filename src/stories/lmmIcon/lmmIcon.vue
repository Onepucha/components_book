<template>
  <i
    :style="iconStyle"
    :class="[iconPack, iconPack !='material-icons' ? icon : '',iconClass,getBg,getBgSize,{'round':round}]"
    v-bind="$attrs"
    class="lmm-icon notranslate icon-scale"
    v-on="$listeners"
  >
    <slot>{{ iconPack == 'material-icons' ? icon : '' }}</slot>
  </i>
</template>
<script>
import "./lmmIcon.scss";

export default {
  name:'lmmIcon',
  props:{
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    color: {
      default: null,
      type: String
    },
    bg: {
      default: null,
      type: String
    },
    size: {
      default: null,
      type: String
    },
    round: {
      default: false,
      type: Boolean
    },

  },
  computed:{
    iconClass() {
      const classes = {}
      classes[this.size] = true
      if (this.color) {
        classes[`lmm-icon-${this.color}`] = true
      }
      return classes
    },
    iconStyle() {
      const style = {
        width: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        height: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        'font-size': /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        color: this.getColor,
        background: this.getBgColor
      }
      return style
    },
    getBg() {
      const classes = {}

      if (this.bg) {
        classes[`con-lmm-icon-bg-${this.bg}`] = true
      }

      return classes
    },
    getBgSize() {
      const classes = {}
      if(['small','medium','large'].includes(this.size))  {
        classes[`bg-${this.size}`] = true;
        classes['lmm-icon-bg'] = true;
      }

      return classes
    },
    getColor() {
      return this.color ? this.color : this.color;
    },
    getBgColor() {
      return this.bg ? this.bg : this.bg;
    },
  },
}
</script>
