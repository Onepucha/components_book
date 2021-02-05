<template lang="html">
  <div
    :class="[`lmm-progress-${color}`,{
      'indeterminate':indeterminate,
    }]"
    :style="styleConProgress"
    class="lmm-progress--background">
    <div
      :style="styleProgress"
      class="lmm-progress--foreground"/>
    <div
      v-if="indeterminate"
      :style="styleProgress"
      class="lmm-progress--indeterminate"/>
  </div>
</template>

<script>
import "./Progress.scss";

export default {
  name:'lmmProgress',
  props:{
    height:{
      type:[Number,String],
      default:5
    },
    indeterminate:{
      type:Boolean,
      default:false,
    },
    percent:{
      type:Number,
      default:0
    },
    color:{
      type:String,
      default:'primary'
    }
  },
  data () {
    return {
      percentx: 0
    }
  },
  computed: {
    styleConProgress () {
      return {
        background: (this.color,.1),
        height: `${this.height}px`
      }
    },
    styleProgress () {
      return {
        background: this.color,
        width: `${this.percentx}%`
      }
    }
  },
  watch:{
    percent(){
      this.percentx = this.percent
    }
  },
  created () {
    this.percentx = 0
  },
  mounted () {
    setTimeout(() => {
      this.percentx = this.percent // to force animation
    }, 600)
  },
}
</script>
