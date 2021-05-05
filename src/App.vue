<template>
  <v-app>

    <v-content>
      <Booking/>
      <router-view>Booking</router-view>
    </v-content>
  </v-app>
</template>

<script>
import Booking from "@/components/Booking";
export default {
  name: 'App',
  components:{Booking},

  data: () => ({
    //
  }),
};
</script>
