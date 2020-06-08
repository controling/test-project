import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/element-ui'
import 'normalize.css/normalize.css'
// import './styles/element-variables.scss'
import '@/styles/index.scss'
import '@/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
