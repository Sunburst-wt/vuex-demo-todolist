import Vue from 'vue'
import App from './App.vue'
import Store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(
    App,
    Store
  ),
}).$mount('#app')
