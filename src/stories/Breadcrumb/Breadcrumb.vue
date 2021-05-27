<template>
  <nav
    v-bind="$attrs"
    :class="`lmm-align-${align}`"
    class="lmm-breadcrumb"
    aria-label="breadcrumb"
    v-on="$listeners">
    <ol class="lmm-breadcrumb--ol">
      <slot/>
      <li
        v-for="item in items"
        v-show="!hasSlot"
        :key="item.title"
        :class="{'lmm-active':item.active,'disabled-link':item.disabled}"
        :aria-current="item.active ? 'page' : null"
      >
        <a
          v-if="!item.active"
          :href="item.url ? item.url : '#'"
          :title="item.title"
          class="lmm-breadcrumb--link"
          v-text="item.title"
        ></a>
        <template v-else>
          <span
            :class="textClass"
            :style="textStyle"
            class="lmm-breadcrumb--text"
            v-text="item.title"
          ></span>
        </template>
        <span
          v-if="!item.active"
          :class="separator.length > 1 ? 'material-icons' : null"
          class="separator notranslate lmm-breadcrum--separator"
          translate="no"
          aria-hidden="true"
          v-text="separator"
        ></span>
      </li>
    </ol>
  </nav>
</template>

<script>
import "./Breadcrumb.scss";

export default {
  name:'lmmBreadcrumb',
  props:{
    items:{
      type:Array
    },
    separator:{
      type:String,
      default:'/'
    },
    color:{
      type:String,
      default: 'primary'
    },
    align:{
      type:String,
      default:'left'
    }
  },
  computed: {
    textClass() {
      const classes = {}
      if (this.color) {
        classes[`lmm-breadcrumb-text-${this.color}`] = true
      }
      return classes
    },
    textStyle() {
      const style = {}
      if (!this.color) {
        style.color = this.color
      }
      return style
    },
    hasSlot () {
      return !!this.$slots.default
    }
  },
  created() {
    if(this.items) {
      this.items = this.items.map(item => {
        if (typeof item.title === "function") {
          return {
            ...item,
            title: item.title(this.$route.params)
          }
        }

        return item
      })
    }
  }
}
</script>
