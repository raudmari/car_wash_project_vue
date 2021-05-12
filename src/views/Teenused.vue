<template>
  <div class="blue lighten-4">
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
