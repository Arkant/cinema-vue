<template>
<v-container>
  it's Films
  {{getAllFilms}}
  <!-- <div v-for="(user, idx) in users" :key="idx">
    <h1>{{ user.name }}</h1>
 </div> -->
</v-container>
</template>

<script>
import router from '@/router';
import { mapGetters } from 'vuex';


export default {
  data() {
    return {
      films: [],
      name: 'ihor',
      users: null
    }
  },
  mounted() {
    if (!this.$store.getters.isAuthenticated) {
      router.push('/');
    } else {
      this.getRecipes();
    }
  },
  methods: {
    getRecipes() {
      this.$store.dispatch('getAllFilms');
    }
  },
  computed: {
    ...mapGetters([
      'getAllFilms'
    ])
  }
}
</script>

<style scoped>

</style>

