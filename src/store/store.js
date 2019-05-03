import Vue from 'vue'
import Vuex from 'vuex'
import films from './modules/films.module';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    films: films
  }
});

export default store;