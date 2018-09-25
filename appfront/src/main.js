import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import FastClick from 'fastclick'
var VueCookie = require('vue-cookie')

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCookie)
/*  防止过度重复点击 */
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
