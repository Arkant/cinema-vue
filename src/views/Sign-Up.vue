<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md5>
                <v-card class="elevation-12">
                    <v-toolbar dark color="#212121">
                        <v-toolbar-title>Sign In Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field color="#4CAF50" prepend-icon="person" name="email" label="Email" type="email"
                                          v-model="email" :rules="emailRules" required>
                            </v-text-field>
                            <v-text-field value="passwordFir" color="#4CAF50" prepend-icon="lock" name="password" label="Password" id="password"
                                          type="password" required v-model="password" :rules="passwordRules">
                            </v-text-field>
                            <v-text-field value="passwordSec" ref="dom-element" color="#4CAF50" prepend-icon="lock" name="password-match" label="Repeat password" id="password-match"
                                          type="password" required v-model="passwordMatch" :error-messages='passwordMatchError()'>
                            </v-text-field>
                        </v-form>
                        <v-card-actions>
                          <a v-on:click="goToLogIn" class="my-green">Already Signed Up?</a>
                          <!-- <v-btn class="white--text width" color="#212121" to="/log-in">Already Signed Up?</v-btn> -->
                          <v-spacer></v-spacer>
                          <v-btn class="white--text" color="#212121" :disabled="!valid" @click="submitForm">Sign Up</v-btn>
                        </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
// import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        valid: false,
        email: '',
        password: '',
        passwordMatch: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v =>
                v.length >= 6 ||
                'Password must be greater than 6 characters',
            
        ],
      };
    },
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          this.$store.dispatch('userRegistration', {
            email: this.email,
            password: this.password
          });
        }
      },
      goToLogIn() {
        this.$router.push('log-in');
      },
      passwordMatchError () { 
        return (this.password === this.passwordMatch) ? '' : 'Passwords must match'
      }
    },

  }
</script>

<style scoped>
  .my-green {
    color:black;
    text-decoration: none;
  }
  .my-green:hover {
    color: #43A047;
  }
</style>