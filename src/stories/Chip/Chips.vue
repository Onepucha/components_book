<template lang="html">
  <div class="">
    <div
      :class="{'no-items':value.length == 0}"
      class="con-chips">
      <slot>
      </slot>

      <input
        :placeholder="value.length > 0 ? null : placeholder"
        v-model="newChip"
        type="text"
        class="con-chips--input"
        @keypress.enter="addItem">
      <div
        class="x-global con-chips--remove-all"
        @click="removeTotalItems">
        <i class="icon material-icons">
          {{ removeIcon }}
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import lmmChip from './Chip.vue'

export default {
  name:'lmmChips',
  components:{
    vsChip
  },
  props:{
    value:{},
    vsColor:{
      type:String,
      default:'primary',
    },
    placeholder:{
      type:String,
      default:'',
    },
    items:{
      type:Array,
    },
    removeIcon:{
      type:String,
      default:'close',
    },
  },
  data: () => ({
    newChip:'',
    chip1:true,
  }),
  methods:{
    addItem(){
      let valueOld = this.value
      valueOld.push(this.newChip)
      this.$emit('input', valueOld)
      this.newChip = ''
    },
    removeTotalItems(){
      let valueOld = this.value
      valueOld.splice(0, this.value.length);
      this.$emit('input', valueOld)
    }
  }
}
</script>
