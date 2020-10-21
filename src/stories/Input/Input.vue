<template lang="html">
  <div
    ref="coninput"
    :style="styleLabel"
    :class="[`lmm-input-${color}`,{
      'isFocus':isFocus,
      'input-icon-validate-success':success,
      'input-icon-validate-danger':danger,
      'input-icon-validate-warning':warning,
      'is-label-placeholder':labelPlaceholder
    }]"
    class="lmm-component lmm-con-input-label lmm-input">
    <label
      v-if="labelPlaceholder?false:label"
      class="lmm-input--label"
      for=""
      @click="focusInput">{{ label }}</label>
    <div class="lmm-con-input">
      <input
        ref="vsinput"
        :style="style"
        :autofocus="autofocus"
        :disabled="disabled"
        :class="[size,{
          'hasValue':value !== '',
          'hasIcon':icon,
          'icon-after-input':iconAfter
        }]"
        :placeholder="null"
        :value="value"
        v-bind="$attrs"
        :type="$attrs.type?$attrs.type:'text'"
        class="lmm-inputx lmm-input--input"
        v-on="listeners">
      <transition name="placeholderx">
        <span
          v-if="isValue&&(labelPlaceholder||$attrs.placeholder)"
          ref="spanplaceholder"
          :style="styleLabel"
          :class="[
            labelPlaceholder&&(size),
            size,
            {
              'lmm-placeholder-label': labelPlaceholder,
          }]"
          class="input-span-placeholder lmm-input--placeholder"
          @click="focusInput">
          {{ $attrs.placeholder || labelPlaceholder }}
        </span>
      </transition>

      <i
        v-if="icon"
        :class="{'icon-after':iconAfter, 'icon-no-border':iconNoBorder}"
        class="material-icons icon-inputx notranslate lmm-input--icon"
        @click="focusInput(); $emit('icon-click');">{{ icon }}
      </i>

      <transition name="icon-validate" >
        <span
          v-if="success || danger || warning"
          :class="{'icon-before':iconAfter}"
          class="input-icon-validate lmm-input--icon-validate">
          <i
            class="material-icons"
            :class="{'icon-before':iconAfter}"
          >{{ getIcon }}</i>
        </span>
      </transition>
    </div>

    <transition-group
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="success"
        key="success"
        class="con-text-validation lmm-input--text-validation">
        <span class="span-text-validation span-text-validation-success lmm-input--text-validation-span">
          {{
            successText
          }}
        </span>
      </div>
      <div
        v-else-if="danger"
        key="danger"
        class="con-text-validation span-text-validation-danger lmm-input--text-validation-span">
        <span class="span-text-validation">
          {{
            dangerText
          }}
        </span>
      </div>
      <div
        v-else-if="warning"
        key="warning"
        class="con-text-validation span-text-validation-warning lmm-input--text-validation-span">
        <span class="span-text-validation">
          {{
            warningText
          }}
        </span>
      </div>
      <div
        v-if="descriptionText"
        key="description"
        class="con-text-validation span-text-validation lmm-input--text-validation-span">
        <span class="span-text-validation">
          {{
            descriptionText
          }}
        </span>
      </div>
    </transition-group>



  </div>
</template>

<script>
import "./Input.scss";

export default {
  name:'lmmInput',
  inheritAttrs: false,
  props:{
    value:{
      default:'',
      type:[String,Number]
    },
    labelPlaceholder:{
      default:null,
      type:[String,Number]
    },
    label:{
      default:null,
      type:[String,Number]
    },
    autofocus:{
      default:false,
      type: Boolean
    },
    icon:{
      default:null,
      type:String
    },
    iconAfter:{
      default:false,
      type: Boolean
    },
    iconNoBorder:{
      default:false,
      type:Boolean
    },
    color:{
      default:'primary',
      type:String
    },
    success:{
      default:false,
      type:Boolean
    },
    danger:{
      default:false,
      type:Boolean
    },
    warning:{
      default:false,
      type:Boolean
    },
    successText:{
      default: null,
      type:String
    },
    dangerText:{
      default: null,
      type:String
    },
    warningText:{
      default: null,
      type:String
    },
    descriptionText:{
      default: null,
      type:String
    },
    size:{
      default:'normal',
      type:String
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    valIconSuccess:{
      default: 'done',
      type:String
    },
    valIconDanger:{
      default: 'clear',
      type:String
    },
    valIconWarning:{
      default: 'warning',
      type:String
    },
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data:()=>({
    isFocus:false
  }),
  computed:{
    style(){
      return {
        border: `1px solid ${this.isFocus?this.color:'rgba(0, 0, 0,.2)'}`,
      }
    },
    styleLabel(){
      return {
        color: this.isFocus?this.color:null,
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.$emit('input',evt.target.value)
        },
        focus: (evt) => {
          this.$emit('focus',evt)
          this.changeFocus(true)
        },
        blur: (evt) => {
          this.$emit('blur',evt)
          this.changeFocus(false)
        }
      }
    },
    isValue(){
      return this.labelPlaceholder?true:!this.value
    },
    getIcon(){
      return this.danger  ? this.valIconDanger
           : this.warning ? this.valIconWarning
           : this.success ? this.valIconSuccess
           : ''
    },
  },
  methods:{
    // animation
    changeFocus(booleanx) {
      this.isFocus = booleanx
    },
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h + 'px'
      done()
    },
    leave: function (el) {
      el.style.height = 0 + 'px'
    },
    focusInput(){
      this.$refs.vsinput.focus()
    }
  },
}
</script>
