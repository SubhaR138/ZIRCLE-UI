import Vue from 'vue'
import App from './App.vue'
//below lines imports the zircle ui and css style sheets into vue.js
import zircle from 'zircle'
import 'zircle/dist/zircle.css'
Vue.use(zircle)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
