<template>
    <v-app>
      <Navbar />
    <v-main>
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

export default {
  name: 'App',
  components:{Navbar, Footer, MainList, Login},
  data () {
  return {
      //
    }
  }
}

</script>
