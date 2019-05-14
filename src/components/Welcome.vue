<template>
  <v-container>
    <v-card-text>
      <div class="text-xs-center display-3">
        <p>VUETIFUL MOVIES</p>
        <v-btn v-if="isAuthenticated" to="/films" class="btn-hello white--text" color="#212121"> 
          <h3>Discover it</h3> 
        </v-btn>
        <v-btn v-else to="/log-in" class="btn-hello white--text" color="#212121"> 
          <h3>Discover it</h3> 
        </v-btn>
      </div>
    </v-card-text>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
}
</script>

<style scope>
  .text-xs-center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: white;
  }
  
  .btn-hello {
    width: 50%;
    height: 50px;
  }
</style>
