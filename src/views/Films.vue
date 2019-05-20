<template>
<v-container>
  it's Films
  <div v-for="(film, idx) in getAllFilms" :key="idx">
    <h1>{{ film.name }}</h1>
    <h1>{{ film.description }}</h1>
    
    <ul v-for="(genre, index) in film.genres" :key="index">
        <li v-text="genre"></li>
    </ul>
    <h1>{{ film.rate }}</h1>
    <h1>{{ film.length }}</h1>
 </div>
    <div>
        <v-img :src="`${setImageUrl}`"></v-img>
    </div>
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
      this.getFilms();
      this.getImages()
    }
  },
  methods: {
    getFilms() {
      this.$store.dispatch('getAllFilms');
    },
    getImages() {
      this.$store.dispatch('getImage','background.bmp');
    }
  },
  computed: {
    ...mapGetters([
      'getAllFilms',
      'setImageUrl'
    ])
  }
}
</script>

<style scoped>

</style>

