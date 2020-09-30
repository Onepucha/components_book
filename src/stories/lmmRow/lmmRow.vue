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

<style lang="css">
/* .row {
  clear: both;
  flex-flow: wrap;
  border-top: 1px solid rgb(210, 210, 210);
}
.row:last-child {
  border-bottom: 1px solid rgb(210, 210, 210);
} */

.row {
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-top: 1px solid rgb(210, 210, 210);
}

.row:last-child {
  border-bottom: 1px solid rgb(210, 210, 210);
}
</style>
