import Vue from 'vue'
import Vuex from 'vuex'
import films from './modules/films.module';
import userAuth from './modules/auth.module';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    films: films,
    userAuth: userAuth
  }
});

export default store;