<template>
    <v-app>
      <Navbar />
    <v-main>
      <Booking/>
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
import Booking from "@/components/Booking";
export default {
  name: 'App',
  components:{Navbar, Footer, MainList, Login, Stations, Services, Booking},
  data () {
  return {
      //
    }
  }
}

  components:{Booking},

  data: () => ({
    //
  }),
};
</script>
