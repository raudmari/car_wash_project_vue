<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1" >Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="email"
            label="e-posti aadress"
            prepend-icon="mdi-account-circle"
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
        <v-btn v-on:click="login()" class="blue lighten-2" dark rounded>Login
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>

</template>
<script>
export default {
  data: () => ({
  showPassword: false,
    'email':'',
    'password':'',

}),
  methods: {
    'login': function () {
      this.$http.post('/api/public/carWash/login', {
        'email':this.email,
        'password':this.password,
      })
          .then(response => {
            console.log(response);
            localStorage.setItem('user-token', token)
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + token
            this.answerInfo = "Login success!"
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    }
  }
}

</script>