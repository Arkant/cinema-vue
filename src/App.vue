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
    background-color: #43A047;
  }
</style>

