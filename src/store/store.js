import Vue from 'vue'
import Vuex from 'vuex'
import films from './modules/films.module';
import userAuth from './modules/auth.module';
import imagesModule from './modules/images.module';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    films: films,
    userAuth: userAuth,
    imagesModule: imagesModule
  }
});

export default store;