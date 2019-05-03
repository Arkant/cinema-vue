<template>
    <v-toolbar class="menu white--text" color="#512DA8">
      <v-toolbar-title class="headline text-uppercase">
      <span class="my-gr">Cinema</span>
      <span class="font-weight-light">VUETIFUL APP</span>
    </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="white--text" to="/" flat>Home</v-btn>
        <v-btn class="white--text" to="/films" flat>Films</v-btn>
        <v-btn class="white--text" to="/about" flat>About</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        //
      }
    }
  }
</script>

<style scoped>
  .menu {
    color: white;
  }
  .font-weight-light {
    /* color: #4CAF50; */
  }
  .my-gr {
    color:#61B965;
  }
</style>
