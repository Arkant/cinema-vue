import firebase from 'firebase';
import router from '@/router';
// import Vue from 'vue';

const userAuth = {
  state: { 
    user: null,
    isAuthenticated: false,
    hasError: null
   },
  mutations: { 
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
        state.isAuthenticated = payload;
    },
    setHasError(state, payload) {
      state.hasError = payload;
    }
   },
  actions: {  
    userRegistration({ commit }, { email, password }) {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
              commit('setHasError', null);
              commit('setUser', user);
              commit('setIsAuthenticated', true);
              router.push('/films');
          })
          .catch((error) => {
              commit('setUser', null);
              commit('setIsAuthenticated', false);
              commit('setHasError', error);
          });
    },
    userLogin({ commit }, { email, password }) {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
              commit('setHasError', null);
              commit('setUser', user);
              commit('setIsAuthenticated', true);
              router.push('/films');
          })
          .catch((error) => {
              commit('setUser', null);
              commit('setIsAuthenticated', false);
              commit('setHasError', error);
          });
    },
    userSignOut({commit}){
      firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');
      })
    }
  },
  getters: {  
    isAuthenticated: state => state.isAuthenticated,
    hasError: state => state.hasError
  }
}

export default userAuth;