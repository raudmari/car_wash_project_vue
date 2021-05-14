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
        <td class="text-right">{{ history.washDateTime }}</td>
        <td class="text-center">{{ history.washStationName }}</td>
        <td class="text-left">{{ history.washTypeName }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  data: function () {
    return {
      'washDateTime': '',
      'washStationName': '',
      'washTypeName': '',
      accounts: []
    }
  },
  mounted() {
    this.$http.get('/api/public/carwash/account')
        .then(response => this.accounts = response.data);
  }
}

</script>