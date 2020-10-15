<template lang="html">
  <div
    :class="['xs-' + Xs, 'sm-' + Sm, 'lg-' + Lg]"
    :style="{
      order: Order,
      'justify-content': Justify,
      display: Type,
      'align-items': Align,
      'margin-left': (Offset * 100) / 12 + '%',
      width: (Width * 100) / 12 + '%',
    }"
    class="col"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "VsCol",
  props: {
    Width: {
      type: [Number, String],
      default: 12,
    },
    Xs: {
      type: [Number, String],
      default: "",
    },
    Sm: {
      type: [Number, String],
      default: "",
    },
    Lg: {
      type: [Number, String],
      default: "",
    },
    Offset: {
      type: [Number, String],
      default: 0,
    },
    Type: {
      type: String,
      default: null,
    },
    Justify: {
      type: String,
      default: null,
    },
    Align: {
      type: String,
      default: null,
    },
    Order: {
      default: null,
      type: [String, Number],
    },
  },
};
</script>