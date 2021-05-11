import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from 'vuex';
import * as VueGoogleMaps from 'vue2-google-maps'

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

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCBm67_bvzHgIAen1S2J1XalZ0ZSlwhARo'
  },
})

new Vue({
  router,
  vuetify,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')




