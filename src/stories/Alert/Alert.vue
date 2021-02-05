<template lang="html">
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">

    <div
      v-if="active"
      ref="alert"
      v-bind="$attrs"
      :class="[`con-lmm-alert-${color}`,{
        'con-icon':icon,
      }]"
      :style="styleAlert"
      class="con-lmm-alert"
      v-on="$listeners">
      <div
        v-if="closable"
        class="con-x lmm-alert--close"
        @click="$emit('update:active',false)">
        <lmm-icon
          :icon-pack="iconPack"
          :icon="closeIcon"
        ></lmm-icon>
      </div>

      <h4
        v-if="title"
        :style="styleTitle"
        class="titlex lmm-alert--title"
        v-text="title"
      ></h4>

      <div
        :class="{'con-icon': icon}"
        class="lmm-alert">
                {{ text }}
        <lmm-icon
          v-if="icon"
          :icon-pack="iconPack"
          :icon="icon"
          class="icon-alert"
        ></lmm-icon>
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
import lmmIcon from "../lmmIcon/lmmIcon.vue";
import "./Alert.scss";



export default {
  name:'VsAlert',
  components: {
      lmmIcon
  },
  props:{
    active:{
      type:Boolean,
      default:true
    },
    title:{
      type:String,
      default:null
    },
    text:{
      type:String,
      default:null
    },
    closable:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      default:'primary'
    },
    icon:{
      type:String,
      default:null
    },
    closeIcon:{
      type:String,
      default:'close'
    },
    iconPack:{
      type:String,
      default:'material-icons'
    }
  },

  computed:{
    styleAlert () {
      return {
        background: (this.color,.15),
        boxShadow: `0px 0px 25px 0px ${(this.color,.15)}`,
        color: (this.color,1)
      }
    },
    styleTitle () {
      return {
        boxShadow: `0px 6px 15px -7px ${(this.color,.4)}`
      }
    }
  },
  mounted () {
    if(this.$refs.alert) {
      this.$nextTick(() => {
        let h = this.$refs.alert.scrollHeight
        this.$refs.alert.style.height = h + 'px'
      })
    }
  },
  methods:{
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done){
      let h = this.$refs.alert.scrollHeight
      this.$refs.alert.style.height = h + 'px'
      el.style.opacity = 1
      done()
    },
    leave(el) {
      this.$refs.alert.style.height = 0 + 'px'
      el.style.opacity = 0
    }
  }
}
</script>
