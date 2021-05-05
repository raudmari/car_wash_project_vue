<template>

  <v-container fluid>
<!--    -------------------------KUUPÄEV-->
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
        ></v-text-field>
      </template>
      <v-date-picker
          v-model="date"
          @input="menu2 = false"
      ></v-date-picker>
    </v-menu>
<!--    --------------------------------KELLAAEG-->
    <v-row>
      <v-col
          cols="11"
          sm="5"
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
          v-model="e8"
          :items="station"
          :menu-props="{ maxHeight: '400' }"
          label="Asukoht"
          multiple
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
          v-model="e9"
          :items="washType"
          label="Pesu"
          multiple
          chips
          hint="Vali sobiv pesu"
          persistent-hint
      ></v-select>
    </v-col>
    <v-row
        align="center"
        justify="space-around"
    >
      <v-btn v-on:click="book()">Broneeri</v-btn>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      'e8': [],
      station: ['1.Tartu, Pargi tn 1', '2.Tallinn, Aia tn 7'],
      'e9': [],
      washType: ['1.Tavaline pesu, 15min, 12 eurot', '2.Vahapesu, 15min, 15 eurot', ],

      time: null,
      menu2: false,
      modal2: false,
      'date1': '',
      'time1': ''
    }
  },
  methods: {
    $http: undefined,
    'book': function () {
      this.$http.post("http://localhost:9090/api/public/carwash/booking" , {
        date: this.date1,
        time: this.time1,

      })

    }
  }
}
</script>