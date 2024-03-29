<template>
  <div :class="classesSlide">
    <component :is="tag" ref="vsWrapper" class="carousel__wrapper">
      <!-- @slot Slot for Slides -->
      <slot />
    </component>

    <!-- @slot Slot for Arrows -->
    <slot v-if="!hideArrows" name="arrows" :change-slide="changeSlide" :bound-left="boundLeft"
      :bound-right="boundRight">
      <button v-show="hideArrowsOnBound ? !boundLeft : true" type="button"
        :disabled="boundLeft" class="
          carousel__arrows
          carousel__arrows--left
        " @click="changeSlide(-1)">
        <lmm-icon :icon="iconLeft" :icon-pack="iconPack" />
      </button>

      <button v-show="hideArrowsOnBound ? !boundRight : true" type="button"
        :disabled="boundRight" class="
          carousel__arrows
          carousel__arrows--right
        " @click="changeSlide(1)">
        <lmm-icon :icon="iconRight" :icon-pack="iconPack" />
      </button>

      
    </slot>
  </div>
</template>

<script>
  import {
    approximatelyEqual,
  } from '../../utils';
  import './Carousel.scss';


  export default {
    props: {
      /**
       * Disable arrows
       */
      hideArrows: {
        type: Boolean,
        default: false
      },
      /**
       * Disable arrows on bound
       */
      hideArrowsOnBound: {
        type: Boolean,
        default: false
      },
      /**
       * Custom tag
       */
      tag: {
        type: String,
        default: 'ul'
      },
      /**
      Тип галереии
      */
      primary: {
        type: Boolean,
      },
      success: {
        type: Boolean,
      },
      danger: {
        type: Boolean,
      },
      warning: {
        type: Boolean,
      },
      dark: {
        type: Boolean,
      },
      light: {
        type: Boolean,
      },
      iconPack: {
        default: 'material-icons',
        type: String
      },
      iconLeft: {
        default: 'arrow_back',
        type: String
      },
      iconRight: {
        default: 'arrow_forward',
        type: String
      }
    },
    data: () => ({
      boundLeft: true,
      boundRight: false,
      slidesWidth: [],
      wrapperScrollWidth: 0,
      wrapperVisibleWidth: 0,
      currentPage: 0,
      currentPos: 0,
      step: 1,
      observer: null,
      onResizeFn: null,
      onScrollFn: null
    }),
    computed: {
      classesSlide() {
        return {
          carousel: true,
          "story--round": this.round,
          "story--primary": this.primary,
          "story--success": this.success,
          "story--danger": this.danger,
          "story--warning": this.warning,
          "story--dark": this.dark,
          "story--light": this.light,
        };
      },
    },
    mounted() {
      this.calcOnInit();

      // MutationObserver
      this.attachMutationObserver()

      // Events
      this.$refs.vsWrapper.addEventListener('scroll', this.onScrollFn)
      window.addEventListener('resize', this.onResizeFn, false)

      this.$on('go-to-page', index => this.goToSlide(index))

    },
    beforeDestroy() {
      // MutationObserver
      this.observer.disconnect()

      // Events
      this.$refs.vsWrapper.removeEventListener('scroll', this.onScrollFn)
      window.removeEventListener('resize', this.onResizeFn, false)
    },
    methods: {
      calcOnInit() {
        if (!this.$refs.vsWrapper) {
          return
        }

        this.calcWrapperWidth()
        this.calcSlidesWidth()
        this.calcCurrentPosition()
        this.setCurrentPage()
        this.calcBounds()
      },
      calcOnScroll() {
        if (!this.$refs.vsWrapper) {
          return
        }

        this.calcCurrentPosition()
        this.setCurrentPage()
        this.calcBounds()
      },
      calcBounds() {
        // Find the closest point, with 5px approximate.
        const isBoundLeft = approximatelyEqual(this.currentPos, 0, 5)
        const isBoundRight = approximatelyEqual(
          this.wrapperScrollWidth - this.wrapperVisibleWidth,
          this.currentPos,
          5
        )

        if (isBoundLeft) {
          /**
           * Reach first item
           * @event bound-left
           * @type {Event}
           */
          this.$emit('bound-left', true)
          this.boundLeft = true
        } else {
          this.boundLeft = false
        }

        if (isBoundRight) {
          /**
           * Reach last item
           * @event bound-right
           * @type {Event}
           */
          this.$emit('bound-right', true)
          this.boundRight = true
        } else {
          this.boundRight = false
        }
      },
      calcWrapperWidth() {
        this.wrapperScrollWidth = this.$refs.vsWrapper.scrollWidth
        this.wrapperVisibleWidth = this.$refs.vsWrapper.offsetWidth
      },
      calcSlidesWidth() {
        const childNodes = [...this.$refs.vsWrapper.children]

        this.slidesWidth = childNodes.map(node => ({
          offsetLeft: node.offsetLeft,
          width: node.offsetWidth
        }))
      },
      getCurrentPage() {
        // Last element if there is nothing left to scroll
        if (approximatelyEqual(
            this.currentPos + this.wrapperVisibleWidth,
            this.wrapperScrollWidth,
            5
          )) {
          return this.slidesWidth.length - 1
        }

        // Find slide closest to scroll position, with 5px approximate
        return this.slidesWidth.findIndex(slide => {
          return approximatelyEqual(slide.offsetLeft, this.currentPos, 5)
        })
      },
      setCurrentPage(index) {
        const newPage = index !== undefined ? index : this.getCurrentPage()

        if (newPage < 0) {
          return
        }

        const previous = this.currentPage
        const current = newPage > 0 ? newPage : 0

        this.currentPage = current
        this.$emit('page', {
          current,
          previous
        })
      },
      calcCurrentPosition() {
        this.currentPos = this.$refs.vsWrapper.scrollLeft || 0
      },
      attachMutationObserver() {
        this.observer = new MutationObserver(() => {
          this.calcOnInit()
        })

        this.observer.observe(
          this.$refs.vsWrapper, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          }
        )
      },
      changeSlide(direction) {
        this.goToSlide(this.currentPage + direction)
      },
      goToSlide(index) {
        if (!this.slidesWidth[index]) {
          return
        }

        this.$refs.vsWrapper.scrollTo({
          left: this.slidesWidth[index].offsetLeft,
          behavior: 'smooth'
        })

        this.setCurrentPage(index)
      }
    }
  }
</script>