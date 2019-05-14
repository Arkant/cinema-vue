<template>
    <v-toolbar class="menu white--text" color="#212121">
      <v-toolbar-title class="headline text-uppercase">
      <span class="my-gr">Cinema</span>
      <span class="font-weight-light">VUETIFUL APP</span>
    </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="white--text"  to="/" flat>Home</v-btn>
        <v-btn v-if="isAuthenticated === true" class="white--text" to="/films" flat>Films True</v-btn>
        <v-btn v-if="isAuthenticated === false" class="white--text" to="/films" flat>Films False</v-btn>
        <v-btn class="white--text" to="/about" flat>About</v-btn>
        <v-btn class="white--text" to="/sign-up" flat>Sign Up</v-btn>
        <v-btn class="white--text" to="/log-in" flat>Log In</v-btn>
      </v-toolbar-items>
    {{isAuthenticated}}
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Header',
    computed: mapState(['isAuthenticated']),
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
