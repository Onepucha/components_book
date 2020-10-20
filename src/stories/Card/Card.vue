<template>
  <div
    :class="{'withHover': actionable, 'fixedHeight': fixedHeight }"
    class="con-vs-card">
    <header
      v-if="hasSlot('header')"
      class="vs-card--header">
      <slot name="header">{{ title }}</slot>
    </header>

    <div
      v-if="hasSlot('media')"
      class="vs-card--media">
      <slot name="media"></slot>
    </div>

    <div
      v-if="hasSlot('content')"
      :class="{'fixedHeight': fixedHeight }"
      class="vs-card--content">
      <slot name="content">{{ text }}</slot>
    </div>

    <footer
      v-if="hasSlot('footer')"
      :class="{'fixedHeight': fixedHeight }"
      class="vs-card--footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
import "./Card.scss";

  export default {
    name: 'lmmCard',
    props:{
      actionable: {
        default: false,
        type: Boolean
      },
      fixedHeight: {
        default: false,
        type: Boolean
      },
      text: {
        type: String
      },
      title: {
        type: String
      },
      image: {
        type: String
      }
    },
    methods: {
      hasSlot(slot) {
        return this.$slots[slot]
      }
    }
  }
</script>
