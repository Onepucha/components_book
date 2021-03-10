import Vue from 'vue'

// VueSnap Lib
import VueSnap from '../src/main'

// VueLazy Lib
import VueLazy from 'vue-lazy'
import 'vue-lazy/dist/vue-lazy.css'

Vue.use(VueSnap)
Vue.use(VueLazy)


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
