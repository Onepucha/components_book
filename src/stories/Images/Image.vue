<template>
  <li class="lmm-image">
    <div class="con-lmm-image">
      <div
        :v-bind="$attrs"
        :style="styleImage"
        class="lmm-image--img">
      </div>
    </div>
    <img
      :src="src"
      class="imag-blur"
      alt="">
  </li>
</template>
<script>
import "./Images.scss";

export default {
  name: 'lmmImage',
  inheritAttrs: false,
  props:{
    src:{
      default: null,
      type: String
    }
  },
  computed:{
    styleImage () {
      return {
        backgroundImage: `url(${this.src})`
      }
    }
  }
}
</script>
