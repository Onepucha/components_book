<template lang="html">
  <div
    v-bind="$attrs"
    :style="avatarStyle"
    :class="avatarClass"
    class="con-vs-avatar"
    v-on="$listeners">
    <div
      v-if="badge && badge > 0"
      :style="badgeStyle"
      :class="badgeClass"
      class="dot-count vs-avatar--count">
      {{ typeof badge != 'boolean' ? badge : null }}
    </div>
    <div
      v-if="src"
      class="con-img vs-avatar--con-img">
      <img
        :src="src"
        :alt="text"
      >
    </div>
    <span
      v-else
      :title="text"
      :style="textStyle"
      :class="[text ? '' : iconPack, text ? '' : icon, textClass]"
      translate="no"
      class="vs-avatar--text notranslate"
    >
      {{ text ? returnText : iconPack == 'material-icons' ? icon : '' }}
    </span>

  </div>
</template>

<script>
import "./Avatar.scss";

export default {
  name: 'lmmAvatar',
  
  props:{
    badge:{
      type:[Boolean,String,Number],
      default:false,
    },
    badgeColor:{
      default:'danger',
      type:String,
    },
    size:{
      type:String,
      default:null,
    },
    src:{
      type:String,
      default:null
    },
    icon:{
      type:String,
      default:'person'
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    textColor:{
      type:String,
      default:'rgb(255, 255, 255)',
    },
    text:{
      type:[String,Number],
      default: null,
    },
    color:{
      type:String,
      default:'rgb(195, 195, 195)',
    }
  },
  computed:{
    avatarClass() {
      const classes = {}
      classes[this.size] = true
      // if (this.color) {
      //   classes[`con-vs-avatar-${this.color}`] = true
      // }
      return classes
    },
    avatarStyle() {
      const style = {
        width: /[px]/.test(this.size) ? this.size : null,
        height: /[px]/.test(this.size) ? this.size : null
      }
      if (this.color) {
        style.background = this.color
      }
      return style
    },
    badgeClass() {
      const classes = {
        badgeNumber: (typeof badge != 'boolean')
      }
      // if (this.badgeColor) {
      //   classes[`dot-count-${this.badgeColor}`] = true
      // }
      return classes
    },
    badgeStyle() {
      const style = {}
      if (this.badgeColor) {
        style.background = this.badgeColor
      }
      return style
    },
    textClass() {
      const classes = {
        'material-icons': !this.text
      }
      // if (this.textColor) {
      //   classes[`vs-avatar-text-${this.textColor}`] = true
      // }
      return classes
    },
    textStyle() {
      const style = {
        transform: `translate(-50%,-50%) scale(${this.returnScale})`
      }
      if (this.textColor) {
        style.color = this.textColor
      }
      return style
    },
    returnText() {
      if(this.text.length <= 5) {
        return this.text
      }
      let exp = /\s/g
      var letras = ''
      if(exp.test(this.text)) {
        this.text.split(exp).forEach((word)=>{
          letras += word[0].toUpperCase()
        })
      } else {
        letras = this.text[0].toUpperCase()
      }
      return letras.length > 5 ? letras[0] : letras
    },
    returnScale() {
      if(!this.text) return 1
      let lengthx = this.returnText.length
      if(lengthx <= 5 && lengthx > 1) {
        return lengthx / (lengthx * 1.50)
      } else {
        return 1
      }
    }
  }
}
</script>
