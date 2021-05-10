import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from 'vuex';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuex)

const store = new Vuex.Store( {
  state: {
    authenticated: false
  },
  mutations: {
    login(a){
      this.state.authenticated = a
    }
  }


})

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
