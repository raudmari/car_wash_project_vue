<template>
  <div>
    <h1 align="center" class="text-uppercase"> Teenused ja Pesulad</h1>
    <Services />
    <Stations />
    <Map />
  </div>
</template>

<script>
import Stations from "../components/Stations";
import Services from "../components/Services";
import Map from "../components/Map";
export default {
  components: {Stations, Services, Map}

}
</script>
