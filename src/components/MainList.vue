<template>
  <v-col align="center">
    <v-card width="600">
      <v-list class="blue lighten-2" dark>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon x-large>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="display-1">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {icon: 'today', text: 'Broneeri', route: '/broneeri'},
        {icon: 'local_car_wash', text: 'Pesulad ja teenused', route: '/teenused'},
      ]

    }
  }
}
</script>