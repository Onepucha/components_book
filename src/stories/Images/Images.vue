<template lang="html">
  <div
    :class="[`lmm-images-hover-${hover}`, {'alternating': alternating, 'notBorderRadius': notBorderRadius, 'notMargin': notMargin}]"
    class="lmm-component lmm-images">
    <ul class="lmm-ul-images lmm-images--ul">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import "./Images.scss";

export default {
  name: "lmmImages",
  inheritAttrs:false,
  props:{
    hover:{
      default:'default',
      type: String
    },
    alternating: {
      default: false,
      type: Boolean
    },
    notBorderRadius:{
      default: false,
      type: Boolean
    },
    notMargin:{
      default: false,
      type: Boolean
    }
  },
  data:()=>({

  }),
}
</script>
