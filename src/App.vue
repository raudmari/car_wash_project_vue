<template>
  <v-app>

    <Navbar/>
    <v-main>
      <a class="weatherwidget-io" href="https://forecast7.com/en/59d4424d75/tallinn/" data-label_1="TALLINN"
         data-label_2="WEATHER" data-icons="Climacons Animated" data-theme="clear">TALLINN WEATHER</a>

      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainList from "./components/MainList";
import Login from "./components/Login";
import Stations from "./components/Stations";
import Services from "./components/Services";
import Booking from "./components/Booking";

export default {
  name: 'App',
  components: {Navbar, Footer, MainList, Login, Stations, Services, Booking},
  data() {
    return {
      //
    }
  }
}
</script>
