
<template>
  <nav>

    <v-app-bar flat app class="blue lighten-2" dark>
      <v-app-bar-nav-icon class="blue lighten-2" dark @click="drawer = !drawer"></v-app-bar-nav-icon>

      <span class="font-weight-light">auto</span>
      <span class="font-weight-bold">pesu</span>
      <v-spacer></v-spacer>

      <v-btn icon rounded v-if="$store.state.authenticated">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn to='/JoinPopup' v-if="!$store.state.authenticated" color="white"  text rounded class="my-2">Liitu</v-btn>

      <v-btn v-on:click="logOut" v-if="$store.state.authenticated" color="white" text rounded class="my-2">Logout</v-btn>
      <v-btn to='/login' v-if="!$store.state.authenticated" color="white" text rounded class="my-2">Login</v-btn>


    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="blue lighten-2">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    'logOut': function () {
      localStorage.removeItem('user-token')
      location.reload()
      this.$store.commit("login",false)
      this.answerInfo = "LogOut success!"
    }
  }
}
</script>

<script>
import JoinPopup from "@/components/JoinPopup";
export default {
  components: { JoinPopup },
  data() {
    return {
      drawer: false,
      snackbar: false,
      timeout: 5000,
      text: 'Uus konto on loodud!',

      links: [
        {icon: 'mdi-home', text: 'Pealehele', route: '/'},
        {icon: 'mdi-login', text: 'Login', route: '/Login'},
        {icon: 'mdi-account', text: 'Liitu', route: '/JoinPopup'},
        {icon: 'mdi-calendar-clock', text: 'Broneeri', route: '/Booking'},
        {icon: 'mdi-car-wash', text: 'Teenused', route: '/teenused'},
        {icon: 'mdi-home-map-marker', text: 'Pesulad', route: '/Pesulad'},
        {icon: 'mdi-account-group', text: 'Meeskond/Kontakt', route: '/meist'}

      ]
    }
  }
}
</script>

<style scoped>

main{
  background-image: url('Untitled.jpg') ;
}

</style>