<template>
  <div align="center">
    <v-container fluid>
      <!--    -------------------------KUUPÄEV-->
      <v-col
          cols="12"
          sm="4"
      >
        <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
  <div align="center">
    <v-container fluid>
      <!--    -------------------------KUUPÄEV-->
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"

        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date"
                label="Vali kuupäev"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                align="center"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="date"
              @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <!--    --------------------------------KELLAAEG-->
      <v-row justify="center">
        <v-col
            cols="12"
            sm="4"
        >
          <v-dialog
              ref="dialog"
              v-model="modal2"
              :return-value.sync="time"
              persistent
              width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="time"
                  label="Kellaaeg"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
                v-if="modal2"
                v-model="time"
                full-width
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="modal2 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(time)"

              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
      </v-row>
      <!--          --------------------ASUKOHT-->
      <v-col
          cols="12"
          sm="4"
      >
        <v-select
            v-model="e1"
            :items="e8"
            item-value="id"
            :menu-props="{ maxHeight: '400' }"
            label="Asukoht"
            prepend-icon="location_city"
            hint="Vali sobiv asukoht"
            persistent-hint
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="date"
                  label="Vali kuupäev"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <!--    --------------------------------KELLAAEG-->
      <v-row justify="center">
        <v-col
            cols="12"
            sm="4"
        >
          <v-dialog
              ref="dialog"
              v-model="modal2"
              :return-value.sync="time"
              persistent
              width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="time"
                  label="Kellaaeg"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
                v-if="modal2"
                v-model="time"
                full-width
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="modal2 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(time)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
      </v-row>
      <!--          --------------------ASUKOHT-->
      <v-col
          cols="12"
          sm="4"
      >
        <v-select
            v-model="stationInsert"
            :items="dbStation"
            item-value="id"
            :menu-props="{ maxHeight: '400' }"
            label="Asukoht"
            hint="Vali sobiv asukoht"
            persistent-hint

      ></v-select>
    </v-col>
    <!--          -----------------PESU TÜÜP-->
    <v-col
        cols="12"
        sm="4"
    >
      <v-select
          v-model="e2"
          :items="e9"
          item-value="id"
          label="Pesu"
          chips
          hint="Vali sobiv pesu"
          persistent-hint
      ></v-select>
    </v-col>
    <v-row
        align="center"
        justify="space-around"
    >
      <v-btn class="ma-2"
      outlined
      color="indigo"
             large
             v-on:click="book()"
      >
        BRONEERI
      </v-btn>
    </v-row>
   <v-card-text>
     {{message}}
   </v-card-text>


  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      'e8': [],
      'e9': [],
      'e1': '',
      'e2': '',
      time: null,
      menu2: false,
      modal2: false,
      'date1': '',
      'time1': '',
      'date': '',
      'answer': '',
     'message': ''


    }
  },
  methods: {

    'station': function () {
      this.$http.get("http://localhost:9090/api/public/carwash/washStation")
          .then(response => {
            this.e8 = response.data
          })
    },
    'serviceType': function () {
      this.$http.get("http://localhost:9090/api/public/carwash/serviceType")
          .then(response => {
            this.e9 = response.data
          })
    },
    'book': function () {
      this.$http.post("http://localhost:9090/api/public/carwash/booking", {
        serviceTypeId: this.e2,
        washStationId: this.e1,
        dateTime: this.date + "T" + this.time,

       }).then(response => {
        let selectedLocationObject=  this.e8.find(x => x.id == this.e1);
        let selectedWashObject = this.e9.find(y => y.id == this.e2);
        this.message = "Aitäh, teie broneering on vastu võetud! " + this.date + " " + this.time + selectedLocationObject.text + selectedWashObject.text
        response.text = this.message
      })

      .catch(() => alert("Error"))

    }
  },
  mounted: function () {
    this.station()
    this.serviceType()
  }
}
</script>