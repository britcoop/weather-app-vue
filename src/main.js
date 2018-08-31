import '@babel/polyfill'
import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount('#app')
