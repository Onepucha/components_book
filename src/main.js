import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router/router'
import storeFirebase from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import resizeObserver from './utils/vue-resize.umd'
import './registerServiceWorker'
import 'es6-promise/auto'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import Alert from '../src/stories/Alert/Alert.vue';
import Avatar from '../src/stories/Avatar/Avatar.vue';
import Blockquote from '../src/stories/Blockquote/Blockquote.vue';
import BodyText from '../src/stories/BodyText/BodyText.vue';
import Breadcrumb from '../src/stories/Breadcrumb/Breadcrumb.vue';
import Button from '../src/stories/Button/Button.vue';
import Card from '../src/stories/Card/Card.vue';
import Carousel from '../src/stories/Carousel/Carousel.vue';
import Checkbox from '../src/stories/Checkbox/Checkbox.vue';
import Chip from '../src/stories/Chip/Chip.vue';
import Comparify from '../src/stories/Comparify/Comparify.vue';
import FlipCard from '../src/stories/FlipCard/FlipCard.vue';
import Heading from '../src/stories/Heading/Heading.vue';
import Images from '../src/stories/Images/Images.vue';
import Input from '../src/stories/Input/Input.vue';
import List from '../src/stories/List/List.vue';
import lmmIcon from '../src/stories/lmmIcon/lmmIcon.vue';
import Loader from '../src/stories/Loader/Loader.vue';
import Modal from '../src/stories/Modal/Modal.vue';
import Notifications from '../src/stories/Notifications/Notifications.vue';
import NumberInput from '../src/stories/NumberInput/NumberInput.vue';
import Pagination from '../src/stories/Pagination/Pagination.vue';
import Progress from '../src/stories/Progress/Progress.vue';
import Radio from '../src/stories/Radio/Radio.vue';
import Select from '../src/stories/Select/Select.vue';
import Slide from '../src/stories/Slide/Slide.vue';
import Slider from '../src/stories/Slider/Slider.vue';
import Switch from '../src/stories/Switch/Switch.vue';
import Tabs from '../src/stories/Tabs/Tabs.vue';
import Textarea from '../src/stories/Textarea/Textarea.vue';
import Tooltip from '../src/stories/Tooltip/Tooltip.vue';
import lmmButton from "../src/stories/Button/Button.vue";
import lmmHeading from "../src/stories/Heading/Heading.vue";
import lmmText from "../src/stories/BodyText/BodyText.vue";

Vue.config.productionTip = false

Vue.use(messagePlugin, resizeObserver)
Vue.use(Vuex)
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
  Vue.component('Alert', Alert)
  Vue.component('Avatar', Avatar)
  Vue.component('Blockquote', Blockquote)
  Vue.component('BodyText', BodyText)
  Vue.component('Breadcrumb', Breadcrumb)
  Vue.component('Button', Button)
  Vue.component('Card', Card)
  Vue.component('Checkbox', Checkbox)
  Vue.component('Chip', Chip)
  Vue.component('Comparify', Comparify)
  Vue.component('FlipCard', FlipCard)
  Vue.component('Heading', Heading)
  Vue.component('Images', Images)
  Vue.component('Input', Input)
  Vue.component('List', List)
  Vue.component('lmmIcon', lmmIcon)
  Vue.component('Loader', Loader)
  Vue.component('Modal', Modal)
  Vue.component('Notifications', Notifications)
  Vue.component('NumberInput', NumberInput)
  Vue.component('Pagination', Pagination)
  Vue.component('Progress', Progress)
  Vue.component('Radio', Radio)
  Vue.component('Select', Select)
  Vue.component('Slide', Slide)
  Vue.component('Slider', Slider)
  Vue.component('Switch', Switch)
  Vue.component('Tabs', Tabs)
  Vue.component('Textarea', Textarea)
  Vue.component('Tooltip', Tooltip)
  Vue.component('lmmButton', lmmButton)
  Vue.component('lmmHeading', lmmHeading)
  Vue.component('lmmText', lmmText)
  Vue.component('resizeObserver', resizeObserver)
}

export default {
  install
}

export {
  Alert,
  Avatar,
  Blockquote,
  BodyText,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Checkbox,
  Chip,
  Comparify,
  FlipCard,
  Heading,
  Images,
  Input,
  List,
  lmmIcon,
  Loader,
  Modal,
  Notifications,
  NumberInput,
  Pagination,
  Progress,
  Radio,
  Select,
  Slide,
  Slider,
  Switch,
  Tabs,
  Textarea,
  Tooltip,
  lmmButton,
  lmmHeading,
  lmmText,
  resizeObserver
}

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      storeFirebase,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// store.commit('increment')
// console.log(store.state.count)
