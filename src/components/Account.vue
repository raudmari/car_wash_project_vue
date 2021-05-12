<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-right">Aeg</th>
        <th class="text-center">Pesula</th>
        <th class="text-left">Pesu</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="history in accounts">
        <td>{{ history.date_time }}</td>
        <td>{{ history.washStation }}</td>
        <td>{{ history.washType }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  data: function () {
    return {
      'date_time': '',
      'washStation': '',
      'washType': '',
      accounts: []
    }
  },
  mounted() {
    this.$http.get('/api/public/carwash/account')
        .then(response => this.accounts = response.data);
  }
}

</script>