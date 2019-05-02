import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    homeMessage: "Find the film that You will love"
  },
  getters: {
    homeMessage: state => state.homeMessage
  }
});

export default store;