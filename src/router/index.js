import Vue from 'vue'
import VueRouter from 'vue-router'
import Pealeht from "../views/Pealeht";
import Meist from "../views/Meist";
import Liitu from "../views/Liitu";
import Teenused from "../views/Teenused";
import Broneeri from "../views/Broneeri"
import Login from "../views/Login";
import JoinPopup from '../components/JoinPopup'
import Booking from "../components/Booking";

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/JoinPopup',
    name: 'JoinPopup',
    component: JoinPopup
  },
  {
    path: '/Booking',
    name: 'Booking',
    component: Booking
  }

]

const router = new VueRouter({
  routes
})

export default router
