<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th >Pesu</th>
        <th >€</th>
        <th >min</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="service in allServices">
        <td >{{ service.washType }}</td>
        <td >{{ service.price }}</td>
        <td >{{ service.duration }}</td>
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
    this.$http.get('/api/public/carWash/serviceType')
        .then(response => this.allServices = response.data);
  }
}
</script>