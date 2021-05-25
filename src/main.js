import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router/router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import resizeObserver from './utils/vue-resize.umd'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import Carousel from '../src/stories/Carousel/Carousel.vue'
import Slide from '../src/stories/Slide/Slide.vue'
import lmmIcon from '../src/stories/lmmIcon/lmmIcon.vue'
import lmmButton from "../src/stories/Button/Button.vue";
import lmmHeading from "../src/stories/Heading/Heading.vue";
import lmmText from "../src/stories/BodyText/BodyText.vue";

Vue.config.productionTip = false

Vue.use(messagePlugin, resizeObserver)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyD1samXKItrnmkcgG90XOmkUcz6gng_j_I",
  authDomain: "digital-labmedia-storybook.firebaseapp.com",
  databaseURL: "https://digital-labmedia-storybook-default-rtdb.firebaseio.com",
  projectId: "digital-labmedia-storybook",
  storageBucket: "digital-labmedia-storybook.appspot.com",
  messagingSenderId: "268324497880",
  appId: "1:268324497880:web:16672e95b63359dd3deaad",
  measurementId: "G-K2V2YMSLHN"
})

const install = Vue => {
  Vue.component('Carousel', Carousel)
  Vue.component('Slide', Slide)
  Vue.component('lmmIcon', lmmIcon)
  Vue.component('lmmButton', lmmButton)
  Vue.component('lmmHeading', lmmHeading)
  Vue.component('lmmText', lmmText)
  Vue.component('resizeObserver', resizeObserver)
}

export default {
  install
}

export { Carousel, Slide, lmmIcon, lmmButton, lmmHeading, lmmText, resizeObserver }

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})