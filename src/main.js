import Vue from 'vue'
import 'materialize-css/dist/js/materialize.min'
import "../src/stories/variables.scss";

import Carousel from './stories/Carousel/Carousel.vue'
import Slide from './stories/Slide/Slide.vue'
import lmmIcon from './stories/lmmIcon/lmmIcon.vue'
import lmmButton from "./stories/Button/Button.vue";
import lmmHeading from "./stories/Heading/Heading.vue";
import lmmText from "./stories/BodyText/BodyText.vue";

Vue.config.productionTip = false

const install = Vue => {
  Vue.component('Carousel', Carousel)
  Vue.component('Slide', Slide)
  Vue.component('lmmIcon', lmmIcon)
  Vue.component('lmmButton', lmmButton)
  Vue.component('lmmHeading', lmmHeading)
  Vue.component('lmmText', lmmText)
}

export default {
  install
}

export { Carousel, Slide, lmmIcon, lmmButton, lmmHeading, lmmText }