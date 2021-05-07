<template>
  <div>
    <br>
    <div align="center">
      <table>
        <th align="left" class="display-1">Pesu tüüp</th>
        <th align="left" class="display-1">Hind</th>
        <th align="left" class="display-1">Kestvus</th>
        <tr align="left" class="text-h6"  v-for="service in allServices">
          <td>{{service.washType}}</td>
          <td>{{service.price}}</td>
          <td>{{service.duration}}</td>
        </tr>
      </table>
    </div>
  </div>
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