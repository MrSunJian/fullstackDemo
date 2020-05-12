import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'
// import EleForm from 'vue-ele-form'
import router from './router'

// Vue.use(EleForm)

Vue.config.productionTip = false

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

Vue.prototype.$http = http

Vue.prototype.$httpajax = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
