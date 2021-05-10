<template>
  <div>
    <h1 align="center" class="text-uppercase"> Teenused ja Pesulad</h1>
    <Services />
    <Stations />
  </div>
</template>

<script>
import Stations from "../components/Stations";
import Services from "../components/Services";
export default {
  components: {Stations, Services}

}
</script>
