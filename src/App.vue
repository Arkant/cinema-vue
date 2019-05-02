<template>
  <v-app class="par">
      <Header/>
      <router-view/>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .par{
    background: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg") no-repeat;
    background-size: cover;
  }
</style>

