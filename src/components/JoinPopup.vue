<template>
  <div class="text-center">
    <h1>Liitudes on iga viies autopesu -50%</h1>




    <v-container fluid>
      <v-layout justify-center align-center>
        <v-flex shrink>
          <div>
            <v-img class="text-center"
                   lazy-src="https://ventsmagazine.com/wp-content/uploads/2021/04/selection-092-500x500-1.png"
                   max-height="6000"
                   max-width="600"
                   src="https://ventsmagazine.com/wp-content/uploads/2021/04/selection-092-500x500-1.png"
            ></v-img>

          </div>
        </v-flex>
      </v-layout>
    </v-container>


    <v-dialog max-width="600px" v-model="drawer">
      <template v-slot:activator="{ on }">
        <div class="text-bottom">
          <v-btn text class="success" v-on="on">Loo konto</v-btn>

        </div>
      </template>


      <v-card>
        <v-card-title>
          <h2>Loo uus kasutaja</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <template v-slot:activator="{ on }">
              <v-btn text class="success" v-on="on">Loo konto</v-btn>
            </template>
            <v-text-field label="Eesnimi" :rules="[rules.required]" v-model="Eesnimi"></v-text-field>
            <v-text-field label="Perekonnanimi" :rules="[rules.required]" v-model="Perekonnanimi"></v-text-field>



            <!--            <vue-tel-input-vuetify label="Telefon" v-model="Telefon" type="number" :rules="[rules.numberRule]"></vue-tel-input-vuetify>-->
            <v-text-field label="Telefon" v-model="Telefon" type="number" :rules="[rules.numberRule]"></v-text-field>




            <v-text-field label="Email" :rules="[rules.required, rules.emailRules]" v-model="Email"
                          prepend-icon="mdi-email"></v-text-field>



            <v-text-field label="Parool" v-model="Parool"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          hint="At least 8 characters"
                          @click:append="show1 = !show1"
                          prepend-icon="mdi-lock"
            ></v-text-field>
            <template>
              <div class="text-center">
                <v-btn v-on:click="looKasutajaNupp()" dark color="blue darken-2" :loading="loading">Loo konto</v-btn>
              </div>

            </template>


            <template>
              <div class="text-center">
                <v-snackbar
                    v-model="snackbar2"
                    :timeout="timeout"
                    top

                >
                  {{ text2 }}

                  <template v-slot:action="{ attrs }">
                    <v-btn
                        color="blue"
                        text
                        v-bind="attrs"
                        @click="snackbar2 = false"
                    >
                      Sulge
                    </v-btn>
                  </template>
                </v-snackbar>
              </div>
            </template>

            <template>
              <div class="text-center">
                <v-snackbar
                    v-model="snackbar1"
                    :timeout="timeout"
                    top

                >
                  {{ text1 }}

                  <template v-slot:action="{ attrs }">
                    <v-btn
                        color="blue"
                        text
                        v-bind="attrs"
                        @click="snackbar1 = false, drawer = false"

                    >
                      Sulge
                    </v-btn>
                  </template>
                </v-snackbar>
              </div>
            </template>

          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>

</template>
<script>
export default {
  data() {
    return {

      Eesnimi: '',
      Perekonnanimi: '',
      Telefon: '',
      Email: '',
      Parool: '',
      show1: false,
      rules: {
        required: value => !!value || 'Kohustuslik väli!',
        min: v => v.length >= 8 || 'Min 8 characters!',
        emailRules: v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Vale emaili aadress!',
        numberRule: v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 999999999999999 ) || 'Vale number!'


      },
      snackbar1: false,
      text1: 'Konto on loodud!',
      snackbar2: false,
      text2: 'Kõik väljad peavad olema korrektselt täidetud!',
      timeout: null,
      timeout2: null,
      loading: false,

      drawer: false,


    }
  },
  methods: {
    'looKasutajaNupp': function () {
      if (this.$refs.form.validate()) {
        this.snackbar1 = true;
        this.loading = true;

        this.$http.post('http://localhost:9090/carWash/newAccountJoin', {
          firstName: this.Eesnimi,
          lastName: this.Perekonnanimi,
          phone: this.Telefon,
          email: this.Email,
          password: this.Parool,
        })
            .then(function (response) {
              console.log(response);
            })
            .catch(response => {
              alert("viga")
            })

      } else {
        this.snackbar2 = true;
      }
      return this.loading = false;


    },
    data() {
      return {
        phone: null
      }
    }


  }


}

</script>

<style lang="css">

/*main{*/
/*  background-image: url('Untitled.jpg') ;*/
/*}*/


</style>