import Vue from 'vue'
import Vuelidate from 'vuelidate'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import "../src/stories/variables.scss";

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)