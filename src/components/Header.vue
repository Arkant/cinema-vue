<template>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
      <span class="grey--text text--darken-4">Cinema</span>
      <span class="indigo--text text--darken-2 font-weight-light">VUETIFUL APP</span>
    </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/about" flat>About</v-btn>
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

<style>

</style>
