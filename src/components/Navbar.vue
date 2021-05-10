
<template>
  <nav>
    <v-toolbar flat app class="blue lighten-2" dark>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">auto</span>
        <span class="font-weight-bold">pesu</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to='/liitu' color="white"  text rounded class="my-2">Liitu</v-btn>
      <v-btn to='/' v-on:click="logOut" v-if="$store.state.authenticated" color="white" text rounded class="my-2">Logout</v-btn>
      <v-btn to='/login' v-if="!$store.state.authenticated" color="white" text rounded class="my-2">Login</v-btn>

    </v-toolbar>
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