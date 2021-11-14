import Vue from 'vue'
import App from './App.vue'
// router.jsをimport
import router from "./router"

Vue.config.productionTip = false

new Vue({
  // routerを使えるようにするためにrouter: router or routerで使用できる
  router: router,
  render: h => h(App),
}).$mount('#app')
