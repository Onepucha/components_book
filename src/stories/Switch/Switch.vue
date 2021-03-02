<template lang="html">
  <button
    :class="[
      `lmm-switch-${color}`,
      {
        'lmm-switch-active':isChecked || $attrs.checked
      }
    ]"
    :style="style"
    v-bind="$attrs"
    class="lmm-component lmm-switch">
    <input
      ref="inputCheckbox"
      v-bind="$attrs"
      :disabled="$attrs.disabled"
      :value="value"
      class="input-switch lmm-switch--input"
      type="checkbox"
      v-on="listeners">

    <span
      ref="on"
      :class="{'active-text':isChecked || $attrs.checked}"
      class="text-on text-switch lmm-switch--text">
      <slot name="on"/>
      <lmm-icon
        :icon-pack="iconPack"
        :icon="lmmIconOn || lmmIcon"
        class="icons-switch lmm-switch--icon"
      ></lmm-icon>
    </span>
    <span
      ref="off"
      :class="{'active-text':!isChecked && !$attrs.checked}"
      class="text-off text-switch lmm-switch--text">
      <slot name="off"/>
      <lmm-icon
        :icon-pack="iconPack"
        :icon="lmmIconOff || lmmIcon"
        class="icons-switch lmm-switch--icon"
      ></lmm-icon>
    </span>
    <span class="lmm-circle-switch lmm-switch--circle"/>
  </button>
</template>

<script>
import "./Switch.scss";

import lmmIcon from "../lmmIcon/lmmIcon.vue";

export default {
  name:'lmmSwitch',
  inheritAttrs:false,
  components: {
      lmmIcon,
  },
  props:{
    value:{},
    color:{
      default:'primary',
      type:String
    },
    lmmIcon:{
      default:null,
      type:String
    },
    lmmIconOn:{
      default:null,
      type:String
    },
    lmmIconOff:{
      default:null,
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    lmmValue:{}
  },
  data:()=>({
    widthx:42,
    checkboxClicked: false,
  }),
  computed:{
    style(){
      return {
        background: this.value?this.color:null,
        width: `${this.widthx}px`
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.toggleValue(evt)
        },
      }
    },
    isChecked(){
      return this.isArrayx() ? this.isArrayIncludes() : this.value
    },
  },
  mounted(){
    this.$nextTick(()=>{
      let w = this.$refs.on.clientWidth>this.$refs.off.clientWidth?this.$refs.on.clientWidth:this.$refs.off.clientWidth
      this.widthx = w + 24
    })

  },
  methods:{
    toggleValue(evt){
      if(Array.isArray(this.value)){
        this.setArray(evt)
      }
      else {
        this.$emit('input', !this.value)
        this.$emit('change',evt)
      }
    },
    setArray(evt){
      const value = this.value.slice(0) // Copy Array.
      if(this.isArrayIncludes()){
        value.splice(value.indexOf(this.lmmValue),1) // delete value
        this.$emit('input', value)
        this.$emit('change', evt)
      } else {
        value.push(this.lmmValue) // add value new
        this.$emit('input', value)
        this.$emit('change', evt)
      }
    },
    isArrayIncludes(){
      let modelx = this.value
      let value = this.lmmValue
      return modelx.includes(value)
    },
    isArrayx(){
      return Array.isArray(this.value)
    }
  },
}
</script>
