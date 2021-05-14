<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr class="text-uppercase">
        <th class="text-center">Pesu</th>
        <th class="text-left">€</th>
        <th class="text-left">min</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="service in allServices">
        <td class="text-center">{{ service.washType }}</td>
        <td class="text-left">{{ service.price }}</td>
        <td class="text-left">{{ service.duration }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data: function () {
    return {
      'washType': '',
      'price': '',
      'duration': '',
      allServices: []
    }
  },
  mounted() {
    this.$http.get('/api/public/carwash/service')
        .then(response => this.allServices = response.data);
  }
}
</script>