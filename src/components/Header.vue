<template>
    <v-toolbar class="menu white--text" color="#212121">
      <v-toolbar-title class="headline text-uppercase">
      <span class="my-gr">Cinema</span>
      <span class="font-weight-light">VUETIFUL APP</span>
    </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="white--text"  to="/" flat>Home</v-btn>
        <v-btn v-if="isAuthenticated" class="white--text" to="/films" flat>Films</v-btn>
        <v-btn class="white--text" to="/about" flat>About</v-btn>
        <v-btn v-if="!isAuthenticated" class="white--text" to="/sign-up" flat>Sign Up</v-btn>
        <v-btn v-if="!isAuthenticated" class="white--text" to="/log-in" flat>Log In</v-btn>
        <v-btn v-else class="white--text" to="/log-out" flat>Log Out</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'Header',
    computed: {
      ...mapGetters([
        'isAuthenticated'
      ])
    },
    data() {
      return {
      };
    },
  }
</script>

<style scoped>
  .menu {
    color: white;
  }
  .my-gr {
    color:#61B965;
  }
</style>
