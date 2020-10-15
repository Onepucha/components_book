<template lang="html">
  <div
    :style="{
      'align-items': Align,
      'justify-content': Justify,
      display: Type,
      overflow: Type === 'block' ? 'hidden' : null,
      width: (Width * 100) / 12 + '%',
    }"
    class="row"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "VsRow",
  props: {
    Type: {
      default: "flex",
      type: String,
    },
    Width: {
      type: [Number, String],
      default: 12,
    },
    Justify: {
      type: String,
      default: null,
    },
    Align: {
      type: String,
      default: null,
    },
  },
};
</script>