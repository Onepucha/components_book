<template lang="html">
  <div
    :style="styleChip"
    :class="[
      `vs-chip-${color}`,
      {
        'closable': closable,
        'con-color': color,
        'bg-chip-transparent': transparent
      }
    ]"
    class="con-vs-chip">

    <span class="text-chip vs-chip--text">
      <slot/>
    </span>

    <button
      v-if="closable"
      class="btn-close vs-chip--close"
      type="button"
      @click="closeChip">
      <i class="icon material-icons">
        {{ closeIcon }}
      </i>
    </button>
  </div>
</template>

<script>
import "./Chip.scss";

export default {
  name:'lmmChip',
  props:{
    active:{
      type:Boolean,
      default:true,
    },
    text:{
      type:String,
      default:null,
    },
    closable:{
      type:Boolean,
      default:false,
    },
    color:{
      type:String,
      default:null,
    },
    closeIcon:{
      type:String,
      default:'clear',
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    styleChip () {
      const background = this.transparent ? this.color : this.color
      const color = this.transparent ? this.color : this.color ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.7)'

      return {
        background: background,
        color: color
      }
    },
    eliminado() {
      if(this.item) {
        return true
      } else {
        if(this.vsClosable) {
          return this.value
        } else {
          return true
        }
      }
    }
  },
  methods:{
    closeChip() {
      console.log(123);
      this.$emit('input', false)
      this.$emit('click')
    },
    remove(){
      this.$emit('vs-remove', false)
      this.$emit('input', false)
    }
  }
}
</script>
