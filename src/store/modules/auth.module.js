import firebase from 'firebase';
import router from '@/router';
// import Vue from 'vue';

const userAuth = {
  state: { 
    user: null,
    isAuthenticated: false
   },
  mutations: { 
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
        state.isAuthenticated = payload;
    },
   },
  actions: {  
    userRegistration({ commit }, { email, password }) {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            console.log(user);
              commit('setUser', user);
              commit('setIsAuthenticated', true);
              router.push('/films');
          })
          .catch((error) => {
              commit('setUser', null);
              commit('setIsAuthenticated', false);
              console.log(error);
          });
    },
    userLogin({ commit }, { email, password }) {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
              commit('setUser', user);
              commit('setIsAuthenticated', true);
              router.push('/films');
          })
          .catch((error) => {
              commit('setUser', null);
              commit('setIsAuthenticated', false);
              console.log(error);
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
    isAuthenticated: state => state.isAuthenticated
  }
}

export default userAuth;