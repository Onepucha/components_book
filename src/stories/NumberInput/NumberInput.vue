<template lang="html">
  <div
    :class="[
      `lmm-input-number-size-${size}`,
      `lmm-input-number-${color}`,
      {'isChangeValue':isChangeValue}
    ]"
    class="lmm-input-number">
    <button
      v-repeat-click="less"
      :disabled="isDisabled"
      :class="{
        limit:value <= min
      }"
      :style="{
        background:getColor
      }"
      class="btn-less lmm-input-number--button-less"
      type="button">
      <i
        class="icon material-icons"
      >{{ iconDec }}</i>
    </button>
    <span v-if="label">{{ label }}</span>
    <input
      ref="input"
      :style="styleInput"
      :value="value"
      v-bind="$attrs"
      :disabled="isDisabled"
      :min="min"
      :max="max"
      type="number"
      class="lmm-input-number--input"
      v-on="listeners">
    <button
      v-repeat-click="plus"
      :disabled="isDisabled"
      :class="{
        limit:value >= max && max !== null
      }"
      :style="{
        background:getColor
      }"
      class="btn-plus lmm-input-number--button-plus"
      type="button">
      <i
        class="icon material-icons"
      >{{ iconInc }}</i>
    </button>
  </div>
</template>

<script>
import "./NumberInput.scss";

export default {
  name:'lmmInputNumber',
  directives: {
    repeatClick: {
      bind(el, binding, vnode) {
        let intervalx = null;
        let startT;
        const functionx = () => vnode.context[binding.expression].apply();
        const bucle = () => {
          if (new Date() - startT < 100) {
            functionx();
          }
          clearInterval(intervalx);
          intervalx = null;
        };
        const eventx = (e) => {
          if (e.button !== 0) return;
          startT = new Date();
          var escuchando = function() {
            if (bucle) {
              bucle.apply(this, arguments);
            }
            el.removeEventListener('mouseup', escuchando, false);
          };
          el.addEventListener('mouseleave', escuchando ,false);
          el.addEventListener('mouseup', escuchando, false);
          clearInterval(intervalx);
          intervalx = setInterval(functionx, 100);
        }
        el.addEventListener('mousedown', eventx ,false);

      }
    }
  },
  props:{
    value:{
        type: [Object, String, Number],
    },
    color:{
      default:'primary',
      type:String
    },
    label: {
      default: null,
      type: String
    },
    max:{
      default: null,
      type:[Number,String]
    },
    min:{
      default: 0,
      type:[Number,String]
    },
    size:{
      default:null,
      type:String
    },
    iconDec:{
      default:'remove',
      type:String
    },
    iconInc:{
      default:'add',
      type:String
    },
    step:{
      default:1,
      type:[Number,String]
    },
    isDisabled: {
      type: Boolean,
      default: false,
    }
  },
  data:()=>({
    isChangeValue:false
  }),
  computed:{
    styleInput() {
      return {
        width:`${this.getLength}px`
      }
    },
    getLength(){
      if(this.value){
        return this.value.toString().length * 9.1
      } else {
        return 0
      }
    },
    getColor(){
      return this.color
    },
    listeners(){
      return {
        ...this.$listeners,
        blur:(evt)=>{
          if(parseFloat(this.value) > parseFloat(this.max)) {
            this.$emit('input',this.max)
          } else if (parseFloat(this.value) < parseFloat(this.min)) {
            this.$emit('input',this.min)
            this.$emit('blur',evt)
          }
        },
        input:(evt)=>{
          this.$emit('input',evt.target.value)
        }
      }
    }
  },
  watch:{
    value(){
      this.isChangeValue = true
      setTimeout(()=>{
        this.isChangeValue = false
      },200)
    }
  },
  methods:{
    plus(){
      let newValue
      if(this.value === ''){
        newValue = 0
        this.$emit('input',this.fixPrecision(newValue))
      } else  {
        if(this.max?parseFloat(this.value)<parseFloat(this.max):true){
          newValue = parseFloat(this.value) + parseFloat(this.step)
          this.$emit('input',this.fixPrecision(newValue))
        }
      }
    },
    less(){
      let newValue
      if(this.value === ''){
        newValue = 0
        this.$emit('input',this.fixPrecision(newValue))
      } else  {
        if(this.min?parseFloat(this.value)>parseFloat(this.min):true){
          newValue = parseFloat(this.value) - parseFloat(this.step)
          this.$emit('input',this.fixPrecision(newValue))
        }
      }
    },
    fixPrecision(n) {
      const precision = (this.step + '').split('.')[1];
      return n.toFixed(precision ? precision.length : 0);
    }
  }
}
</script>
