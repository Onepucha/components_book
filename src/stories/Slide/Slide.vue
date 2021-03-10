<template>
  <component
    :is="tag"
    ref="lmmSlide"
    class="carousel__slide"
    tabindex="0"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    /**
     * Custom tag
     */
    tag: {
      type: String,
      default: 'li'
    }
  }
}
</script>
