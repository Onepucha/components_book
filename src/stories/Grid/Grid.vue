<template>
  <div class="grid">
    <lmm-row>
      <lmm-col type="flex" justify="center" align="center" Width="12">
        100%
      </lmm-col>
    </lmm-row>
    <lmm-row>
      <lmm-col type="flex" justify="center" align="center" Width="6">
        50%
      </lmm-col>
      <lmm-col type="flex" justify="center" align="center" Width="6">
        50%
      </lmm-col>
    </lmm-row>
  </div>
</template>

<script>
import lmmRow from "../stories/lmmRow/lmmRow";
import lmmCol from "../stories/lmmCol/lmmCol";

export default {
  name: "HelloWorld",
  components: {
    lmmRow,
    lmmCol
  },
  props: {
    msg: String
  }
};
</script>