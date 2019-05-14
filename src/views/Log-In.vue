<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md5>
                <v-card class="elevation-12">
                    <v-toolbar dark color="#212121">
                        <v-toolbar-title>Login Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field  color="#4CAF50" prepend-icon="person" name="email" label="Email" type="email"
                                          v-model="email" :rules="emailRules" required>
                            </v-text-field>
                            <v-text-field  color="#4CAF50" prepend-icon="lock" name="password" label="Password" id="password"
                                          type="password" required v-model="password" :rules="passwordRules">
                            </v-text-field>
                        </v-form>
                    <v-card-actions>
                        <a class="my-green" v-on:click="goToSignUp">Not a member yet?</a>
                        <v-spacer></v-spacer>
                        <v-btn class="white--text" color="#212121" :disabled="!valid" @click="submitLogin">Login</v-btn>
                    </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <router-view/>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'log-in',
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v =>
                    v.length >= 6 ||
                    'Password must be greater than 6 characters'
            ]
        };
    },
    methods: {
      submitLogin() {
          if (this.$refs.form.validate()) {
              this.$store.dispatch('userLogin', {
                  email: this.email,
                  password: this.password
              });
          }
      },
      goToSignUp() {
        this.$router.push('sign-up');
      },
    },
    computed: mapState(['user'])
    
};
</script>

<style scoped>
    .my-green {
        color: black;
        text-decoration: none;
    }
    .my-green:hover {
        color: #43A047;
    }
</style>