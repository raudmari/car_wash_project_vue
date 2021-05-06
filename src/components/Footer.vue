<template>
  <v-footer class="blue lighten-1" dark >
    <v-row
      justify="center"
      no-gutters
      >
      <v-btn v-for="link in links" :key="link.text" router :to="link.route" color="white" text rounded class="my-2">{{ link.text }}
      </v-btn>
    <v-col
        class="text-center"
        cols="12"
    >
      {{ new Date().getFullYear() }} — <span class="font-weight-light">AUTO</span>
      <span class="font-weight-bold">PESU</span>
    </v-col>
    </v-row>
  </v-footer>

</template>
<script>

export default {
  data: () => ({
    links: [
      {text: 'Pealehele', route: '/pealeht'},
      { text: 'Pesulad / teenused', route: '/teenused' },
      { text: 'Meeskond / kontakt', route: '/meist'},
    ],
  }),
}

</script>