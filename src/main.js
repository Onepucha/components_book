import Vue from 'vue'
import Vuelidate from 'vuelidate'
import 'materialize-css/dist/js/materialize.min'
import "../src/stories/variables.scss";

import './polyfills'
import Carousel from './stories/Carousel/Carousel.vue'
import Slide from './stories/Slide/Slide.vue'
import lmmIcon from './stories/lmmIcon/lmmIcon.vue'

Vue.config.productionTip = false
Vue.use(Vuelidate)


const install = Vue => {
  Vue.component('Carousel', Carousel)
  Vue.component('Slide', Slide)
  Vue.component('lmmIcon', lmmIcon)
}

export default {
  install
}

export { Carousel, Slide, lmmIcon }