import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyD1samXKItrnmkcgG90XOmkUcz6gng_j_I",
  authDomain: "digital-labmedia-storybook.firebaseapp.com",
  projectId: "digital-labmedia-storybook",
  storageBucket: "digital-labmedia-storybook.appspot.com",
  messagingSenderId: "268324497880",
  appId: "1:268324497880:web:16672e95b63359dd3deaad",
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});
