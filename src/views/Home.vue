<template>
<v-container>
  <Welcome/>
</v-container>
</template>

<script>
  import Welcome from '../components/Welcome'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Welcome
    },
    computed: {
      ...mapGetters([
        'isAuthenticated'
      ])
    }
  }
</script>

<style scoped>
.container {
  color: #353F9F; 
}
</style>

