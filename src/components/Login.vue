<template>
  <div>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-text>
      <v-form>
        <v-text-field v-model="email"
            label="e-posti aadress"
            prepend-icon="mdi-account-circle"
            :rules="[rules.emailRules]"
        ></v-text-field>
        <v-text-field
            v-model="password"
            :type="showPassword ? 'text': 'password'"
            label="Salasõna"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' :
            'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-btn v-on:click="login()" class="blue lighten-2" dark rounded justify="space around">Login
        </v-btn>
      </v-form>
    </v-card-text>

  </v-card>
    {{answerInfo}}
  </div>
</template>
<script>
export default {
  data: () => ({
  showPassword: false,
    'email':'',
    'password':'',
    'answerInfo':'',
    rules: {
       emailRules: v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Vale emaili aadress!',
    },



}),
  methods: {
    'login': function () {
      this.$http.post('/api/public/carwash/login', {
        'email':this.email,
        'password':this.password,
      })
          .then(response => {
            console.log(response);
            localStorage.setItem('user-token', response.data)
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + response.data
            this.$store.commit("login",true)
            console.log("login success" );
            this.answerInfo = "Login success!"
            this.$router.push('account')
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    }
  }

}

</script>