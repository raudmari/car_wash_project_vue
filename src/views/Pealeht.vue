<template>
  <div>
    <v-main>
      <h1 class="blue--text" align="center">Autopesu pakub automaatpesulatele broneerimislahendusi</h1>
      <br>
      <MainList />
    </v-main>
  </div>
</template>

<script>
import MainList from "../components/MainList";
export default {
  components: {MainList}
}
</script>