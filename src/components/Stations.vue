<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-right">Pesula</th>
        <th class="text-center">Asula</th>
        <th class="text-left">Aadress</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="station in allStations">
        <td class="text-right">{{ station.stationName }}</td>
        <td class="text-center">{{ station.city }}</td>
        <td class="text-left">{{ station.address }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>

export default {
  data: function () {
    return {
      'stationName': '',
      'city': '',
      'address': '',
      allStations: []
    }
  },
  mounted() {
    this.$http.get('/api/public/carWash/stations')
        .then(response => this.allStations = response.data);
  }
}
</script>