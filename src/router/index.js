import Vue from 'vue'
import VueRouter from 'vue-router'
import Pealeht from "../views/Pealeht";
import Meist from "../views/Meist";
import Liitu from "../views/Liitu";
import Teenused from "../views/Teenused";
import Broneeri from "../views/Broneeri"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pealeht',
    component: Pealeht
  },
  {
    path: '/meist',
    name: 'Meist',
    component: Meist
    },
  {
    path: '/liitu',
    name: 'Liitu',
    component: Liitu
  },
  {
    path: '/teenused',
    name: 'Teenused',
    component: Teenused
  },
  {
    path: '/broneeri',
    name: 'Broneeri',
    component: Broneeri
  }

]

const router = new VueRouter({
  routes
})

export default router
