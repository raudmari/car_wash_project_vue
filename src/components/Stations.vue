<template>
  <h1>Pesulad</h1>
  <v-table>
    <th>Jaama nimi</th>
    <th>Asula</th>
    <th>Aadress</th>
    <tr v-for="station in allStations">
    <td>{{station.stationName}}</td>
    <td>{{station.city}}</td>
    <td>{{station.address}}</td>
    </tr>

  </v-table>
</template>
<script>

export default {
  data: function () {
    return {
      allStations: []
    }
},
  mounted() {
    this.$http.get('/api/public/carWash/stations')
        .then(response => this.allStations = response.data);
  }
}
</script>