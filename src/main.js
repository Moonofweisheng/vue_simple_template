import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import api from './request/api/api'
require('./uitls/js/mock')

Vue.config.productionTip = false
Vue.prototype.$api = api

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (store.state.login.token == "" && to.name != 'login') {
    //  next('/login')
    next()
  } else {
    next()
  }

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')