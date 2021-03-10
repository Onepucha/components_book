import {
  actions
} from '@storybook/addon-actions'
import Carousel from './Carousel.vue'
import Slide from '../Slide/Slide.vue'
import carouselMock from './Carousel.mocks.js'
import './Carousel.scss'

export default {
  title: "Components/Carousel",
  component: Carousel,
};

export const Default = (_, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  data: () => ({
    carouselMock
  }),
  components: {
    Carousel,
    Slide
  },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      v-bind="$props"
      class="story"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      :primary="true"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
    >
      <slide
        class="story__slide"
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const Multiple = (_, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  data: () => ({
    carouselMock
  }),
  components: {
    Carousel,
    Slide
  },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
    v-bind="$props"
      class="story story--multiple"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      :primary="true"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
    >
      <slide
        class="story__slide"
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const MultipleCustomArrows = (_, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  data: () => ({
    carouselMock
  }),
  components: {
    Carousel,
    Slide
  },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      v-bind="$props"
      class="story story--multiple"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      :primary="true"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
    >
      <slide
        class="story__slide"
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>

      <template #arrows="{ changeSlide, boundLeft, boundRight }">
        <button @click="changeSlide(-1)">
          left
        </button>

        <button @click="changeSlide(1)">
          right
        </button>

        <p v-if="boundLeft">
          boundLeft!
        </p>

        <p v-else-if="boundRight">
          boundRight!
        </p>
      </template>
    </carousel>
  `
})

export const NonRegular = (_, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  data: () => ({
    carouselMock
  }),
  components: {
    Carousel,
    Slide
  },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      v-bind="$props"
      class="story story--non-regular"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      :primary="true"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
    >
      <slide
        class="story__slide"
        v-for="{ id, content, width } in carouselMock"
        :key="id"
        :style="{ flexBasis: width + 'px' }"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const Images = (_, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  data: () => ({
    carouselMock
  }),
  components: {
    Carousel,
    Slide
  },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      v-bind="$props"
      class="story story--multiple story--images"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
    >
      <slide
        class="story__slide"
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <img
          :src="image"
          :alt="name"
        />
      </slide>
    </carousel>
  `
})

export const ImagesLazy = (_, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  data: () => ({
    carouselMock
  }),
  components: {
    Carousel,
    Slide
  },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      v-bind="$props"
      class="story story--multiple story--images"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
    >
      <slide
        class="story__slide"
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <lazy-image
          :src="image"
          :alt="name"
          width="200"
          height="200"
        />
      </slide>
    </carousel>
  `
})