<template>
  <div  align="center">
    <table border="1">
      <th>aeg</th>
      <th>pesula</th>
      <th>pesu</th>
      <tr v-for="history in userHistory">
        <td>{{history.date_time}}</td>
        <td>{{history.washStation}}</td>
        <td>{{history.washType}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'date_time': '',
      'washStation': '',
      'washType': '',
      userHistory: []
    }
  },
  mounted() {
    this.$http.get('/api/public/carwash/account')
        .then(response => this.allStations = response.data);
  }
}


</script>