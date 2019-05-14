<template>
  <v-app class="par">
      <Header/>
      <SignUp/>
      <LogIn/>
      <router-view/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import SignUp from './components/Sign-Up';
import LogIn from './components/Log-In';

export default {
  name: 'App',
  components: {
    Header,

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

