<template lang="html">
  <div
    :class="[
      'xs-'+Xs,
      'sm-'+Sm,
      'lg-'+Lg,
    ]"

    :style="{
      'order':Order,
      'justify-content':Justify,
      'display':Type,
      'align-items':Align,
      'margin-left':Offset*100/12+'%',
      'width':Width*100/12+'%'}"
    class="col">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "VsCol",
  props: {
    Width: {
      type: [Number, String],
      default: 12
    },
    Xs: {
      type: [Number, String],
      default: ""
    },
    Sm: {
      type: [Number, String],
      default: ""
    },
    Lg: {
      type: [Number, String],
      default: ""
    },
    Offset: {
      type: [Number, String],
      default: 0
    },
    Type: {
      type: String,
      default: null
    },
    Justify: {
      type: String,
      default: null
    },
    Align: {
      type: String,
      default: null
    },
    Order: {
      default: null,
      type: [String, Number]
    }
  }
};
</script>

<style lang="css">
.col {
  float: left;
  color: rgb(150, 150, 150);
  background: rgb(245, 245, 245);
  border-left: 1px solid rgb(210, 210, 210);
}

.col:last-child {
  border-right: 1px solid rgb(210, 210, 210);
}

.lg-12 {
  width: 100% !important;
}

.lg-11 {
  width: 91.66666666666667% !important;
}

.lg-10 {
  width: 83.33333333333333% !important;
}

.lg-9 {
  width: 75% !important;
}

.lg-8 {
  width: 66.66666666666667% !important;
}

.lg-7 {
  width: 58.33333333333333% !important;
}

.lg-6 {
  width: 50% !important;
}

.lg-5 {
  width: 41.66666666666667% !important;
}

.lg-4 {
  width: 33.33333333333333% !important;
}

.lg-3 {
  width: 25% !important;
}

.lg-2 {
  width: 16.66666666666667% !important;
}

.lg-1 {
  width: 8.333333333333333% !important;
}

.lg-0 {
  display: none !important;
}

@media only screen and (max-width: 900px) {
  .sm-12 {
    width: 100% !important;
  }

  .sm-11 {
    width: 91.66666666666667% !important;
  }

  .sm-10 {
    width: 83.33333333333333% !important;
  }

  .sm-9 {
    width: 75% !important;
  }

  .sm-8 {
    width: 66.66666666666667% !important;
  }

  .sm-7 {
    width: 58.33333333333333% !important;
  }

  .sm-6 {
    width: 50% !important;
  }

  .sm-5 {
    width: 41.66666666666667% !important;
  }

  .sm-4 {
    width: 33.33333333333333% !important;
  }

  .sm-3 {
    width: 25% !important;
  }

  .sm-2 {
    width: 16.66666666666667% !important;
  }

  .sm-1 {
    width: 8.333333333333333% !important;
  }

  .sm-0 {
    display: none !important;
  }
}

@media only screen and (max-width: 600px) {
  .xs-12 {
    width: 100% !important;
  }

  .xs-11 {
    width: 91.66666666666667% !important;
  }

  .xs-10 {
    width: 83.33333333333333% !important;
  }

  .xs-9 {
    width: 75% !important;
  }

  .xs-8 {
    width: 66.66666666666667% !important;
  }

  .xs-7 {
    width: 58.33333333333333% !important;
  }

  .xs-6 {
    width: 50% !important;
  }

  .xs-5 {
    width: 41.66666666666667% !important;
  }

  .xs-4 {
    width: 33.33333333333333% !important;
  }

  .xs-3 {
    width: 25% !important;
  }

  .xs-2 {
    width: 16.66666666666667% !important;
  }

  .xs-1 {
    width: 8.333333333333333% !important;
  }

  .xs-0 {
    display: none !important;
  }
}
</style>
