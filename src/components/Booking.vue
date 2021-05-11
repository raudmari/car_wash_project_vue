<template>

  <div align="center">
    <v-container fluid>
      <!--    -------------------------KUUPÄEV-->

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
              :allowed-dates="allowedDates"
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
                :allowed-minutes="allowedStep"
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
            prepend-icon="location_city"
            persistent-hint

        ></v-select>
      </v-col>
      <!--          -------11----------PESU TÜÜP-->
      <v-col
          cols="12"
          sm="4"
      >
        <v-select
            v-model="washTypeInsert"
            :items="dbWashType"
            item-value="id"
            label="Pesu"
            hint="Vali sobiv pesu"
            prepend-icon="local_car_wash"
            persistent-hint
        ></v-select>
      </v-col>

      <!--      ----------------------BRONEERI NUPP-->
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
      <!--      -----------------SÕNUM PEALE BRONEERIMIST-->
      <div class="mt-12 bottom-nav deprecated-label font-italic">
        <v-card-text>
          {{ message }}
          <v-spacer></v-spacer>
          {{ pinAnswer }}
        </v-card-text>
      </div>

    </v-container>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      'dbStation': [],
      'dbWashType': [],
      'stationInsert': '',
      'washTypeInsert': '',
      time: null,
      menu2: false,
      modal2: false,
      'date1': '',
      'time1': '',
      'date': '',
      'answer': '',
      'message': '',
      'pinAnswer': '',
      'pin': ''
    }
  },
  methods: {
    'station': function () {
      this.$http.get("http://localhost:9090/api/public/carwash/washStation")
          .then(response => {
            this.dbStation = response.data
          })
    },
    'serviceType': function () {
      this.$http.get("http://localhost:9090/api/public/carwash/serviceType")
          .then(response => {
            this.dbWashType = response.data
          })
    },
    'book': function () {
      this.$http.post("http://localhost:9090/api/public/carwash/booking", {
        serviceTypeId: this.washTypeInsert,
        washStationId: this.stationInsert,
        dateTime: this.date + "T" + this.time,

      }).then(response => {
        let selectedLocationObject = this.dbStation.find(x => x.id == this.stationInsert);
        let selectedWashObject = this.dbWashType.find(y => y.id == this.washTypeInsert);
        this.message = "Aitäh, teie broneering on vastu võetud! Kuupäev: " + this.date + " Kellaaeg " + this.time + " Asukoht: " + selectedLocationObject.text + " Pesu tüüp: " + selectedWashObject.text
        this.pin = response.data
        this.pinAnswer = "Teie pin on: " + this.pin
      })

          .catch(() => alert("Error"))

    },

    allowedStep: m => m % 15 === 0,

    allowedDates: val => Date.parse(val) > Date.now() - 8.64e7,


  },


  mounted: function () {
    this.station()
    this.serviceType()
  }
}
</script>