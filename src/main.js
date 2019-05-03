import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import * as firebase from 'firebase'

import config from './firebase.config'
Vue.prototype.$firebase = firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
