<template>
  <div>
    <div v-if="description">
      <span style="margin-right:5px">
        {{ descriptionTitle }}: {{ minRows }} - {{ maxRows }} {{ descriptionConnector }} {{ sizeArray }} |
        {{ descriptionBody }}:

      </span>
      <ul class="lmm-pagination--array">
        <li v-for="(row,index) in descriptionItems" :key="index">
          <span :style="styleDescription"
            :class="[`lmm-description-${color}`,{ 'lmm-pagination--bold': (index==indexRows)}]"
            @click="changeRowMaxItems(index)">
            {{ row }}
          </span>
          <span v-if="index != (descriptionItems.length - 1)">
            ,
          </span>
        </li>
      </ul>
    </div>
    <div :style="stylePagination" :class="[`lmm-pagination-${color}`]" class="con-lmm-pagination">
      <nav class="lmm-pagination--nav">
        <button :class="{disabled:current <= 1 ? 'disabled' : null}" :disabled="current === 1"
          class="lmm-pagination--buttons btn-prev-pagination lmm-pagination--button-prev" @click="prevPage">
          <lmm-icon :icon-pack="iconPack" :icon="prevIcon ? prevIcon : defaultPrevIcon"></lmm-icon>
        </button>
        <ul class="lmm-pagination--ul">
          <li v-for="(page, index) in pages" :key="index" :class="{'is-current': page == current}"
            class="item-pagination lmm-pagination--li" @click="goTo(page)">
            <span>
              {{ page }}
            </span>

            <div class="effect"></div>
          </li>
        </ul>
        <!-- :style="styleBtn" -->
        <button :class="{disabled:current === total ? 'disabled' : null}" :disabled="current === total"
          class="lmm-pagination--buttons btn-next-pagination lmm-pagination--button-next" @click="nextPage">
          <lmm-icon :icon-pack="iconPack" :icon="nextIcon ? nextIcon : defaultNextIcon"></lmm-icon>
        </button>
        <input v-if="goto" v-model="go" :max="total" class="lmm-pagination--input-goto" min="1" type="number"
          @change="goTo">
      </nav>
    </div>
  </div>
</template>
<script>
  import "./Pagination.scss";

  export default {
    name: 'lmmPagination',
    props: {
      color: {
        type: String,
        default: 'primary'
      },
      total: {
        type: Number,
        required: true
      },
      sizeArray: {
        type: Number,
        required: false
      },
      maxItems: {
        type: [Number, String],
        required: false
      },
      value: {
        type: Number,
        required: true,
        default: 1
      },
      max: {
        type: Number,
        default: 9
      },
      goto: {
        type: Boolean
      },
      type: {
        type: String
      },
      prevIcon: {
        type: String,
      },
      nextIcon: {
        type: String,
      },
      iconPack: {
        type: String,
        default: 'material-icons'
      },
      description: {
        default: false,
        type: Boolean
      },
      descriptionItems: {
        default: () => [],
        type: Array
      },
      descriptionTitle: {
        type: String,
        default: 'Registries'
      },
      descriptionConnector: {
        type: String,
        default: 'of'
      },
      descriptionBody: {
        type: String,
        default: 'Pages'
      },
    },
    data: () => ({
      pages: [],
      current: 0,
      go: 0,
      prevRange: '',
      nextRange: '',
      hoverBtn1: false,
      minRows: 0,
      maxRows: 0,
      indexRows: 0,
    }),
    computed: {
      defaultNextIcon() {

        return 'chevron_right'
      },
      defaultPrevIcon() {

        return 'chevron_left'
      },
      stylePagination() {
        let style = {}
        if (!this.color) {
          style = {
            '--lmm-color-pagination': this.color,
            '--lmm-color-pagination-alpha': (this.color, .5)
          }
        }
        return style
      },
      styleDescription() {
        return {
          'cursor': 'pointer',
        }
      },
    },
    watch: {
      current(val) {
        this.getPages()
        this.calculateMinMax(val)
        this.$emit('input', this.current)
        this.$emit('change', this.current)
      },
      total() {
        this.getPages()
      },
      max() {
        this.getPages()
      },
      value(val) {
        const pageNum = val < 1 ? 1 : (val <= this.total ? val : this.total)
        this.goTo(pageNum)
      },
    },

    async mounted() {
      this.current = this.go = this.value
      await this.calculateMinMax(this.current)
      this.indexRows = this.descriptionItems.indexOf(this.maxItems)
      this.getPages()
    },

    methods: {
      async changeRowMaxItems(index) {
        this.indexRows = index
        await this.$emit('changeMaxItems', index)
        await this.calculateMinMax(this.current)
        this.current = 1
      },
      async calculateMinMax(val) {
        this.maxRows = ((val * this.maxItems) <= this.sizeArray) ? val * this.maxItems : this.sizeArray
        this.minRows = ((val * this.maxItems) <= this.sizeArray) ? (this.maxRows - this.maxItems) + 1 : ((this
          .current - 1) * this.maxItems) + 1
      },
      isEllipsis(page) {
        return page === '...'
      },
      goTo(page) {
        if (page === '...') {
          return
        }
        if (typeof page.target === 'undefined') {
          this.current = page
        } else {
          const value = parseInt(page.target.value, 10)
          this.go = (
            value < 1 ? 1 : (value <= this.total ? value : this.total)
          )
          this.current = this.go
        }
      },
      getPages() {
        if (this.total <= this.max) {
          let pages = this.setPages(1, this.total)
          this.pages = pages
        }
        const even = this.max % 2 === 0 ? 1 : 0
        if (this.total < 6) {
          this.prevRange = Math.floor(this.max / (this.max / 2))
        } else {
          this.prevRange = Math.floor(this.max / 2)
        }
        this.nextRange = this.total - this.prevRange + 1 + even

        if (this.current >= this.prevRange && this.current <= this.nextRange) {
          const start = this.current - this.prevRange + 2
          const end = this.current + this.prevRange - 2 - even

          this.pages = [1, '...', ...this.setPages(start, end), '...', this.total]
        } else if (this.total < 6) {
          this.pages = [
            ...this.setPages(1, this.total)
          ]
        } else {
          this.pages = [
            ...this.setPages(1, this.prevRange),
            '...',
            ...this.setPages(this.nextRange, this.total)
          ]
        }

      },
      setPages(start, end) {
        const setPages = []

        for (start > 0 ? start : 1; start <= end; start++) {
          setPages.push(start)
        }

        return setPages
      },
      nextPage() {
        if (this.current < this.total) {
          this.current++
        }
      },
      prevPage() {
        if (this.current > 1) {
          this.current--
        }
      }
    }
  }
</script>
