
<template>
  <nav>
    <v-toolbar flat app class="blue lighten-2" dark>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">auto</span>
        <span class="font-weight-bold">pesu</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="link in links" :key="link.text" router :to="link.route" color="white" text rounded class="my-2"><span>{{link.text}}</span>
      </v-btn>

    </v-toolbar>
  </nav>
</template>
<script>
export default {
  data: () => ({
    links: [
      {text: 'Loo konto', route: '/liitu'},
      {text: 'Login', route: '/login'}]
  })
}
</script>