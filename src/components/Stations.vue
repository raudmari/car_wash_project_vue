<template>
  <div>
  <h1 class="display-3" align="center">Pesulad</h1>
    <br>
  <div align="center">
    <table>
      <th align="left" class="display-1">Pesula</th>
      <th align="left" class="display-1"></th>
      <th align="left" class="display-1">Aadress</th>
      <br>
      <tr align="left" class="text-h6" v-for="station in allStations">
        <td>{{ station.stationName}}</td>
        <td>{{ station.city }}</td>
        <td>{{ station.address }}</td>
      </tr>
    </table>
  </div>
  </div>
</template>
<script>

export default {
  data: function () {
    return {
      'stationName':'',
      'city':'',
      'address':'',
      allStations: []
    }
  },
  mounted() {
    this.$http.get('/api/public/carWash/stations')
        .then(response => this.allStations = response.data);
  }
}
</script>