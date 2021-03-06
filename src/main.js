import Vue from 'vue'
import App from './App.vue'

import router from './router'
Vue.config.productionTip = false

/*--------------  Importamos CSS  --------------*/
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
