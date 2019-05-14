import firebase from 'firebase';
import router from '@/router';
import Vue from 'vue';

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
        Vue.set(state.isAuthenticated, )
    },
   },
  actions: {  
    userRegistration({ commit }, { email, password }) {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
              commit('setUser', user);
              commit('setIsAuthenticated', true);
              console.log(user);
              router.push('/films');
              
          })
          .catch(() => {
              commit('setUser', null);
              commit('setIsAuthenticated', false);
          });
    },
    userLogin({ commit }, { email, password }) {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
              commit('setUser', user);
              commit('setIsAuthenticated', true);
          })
          .catch(() => {
              commit('setUser', null);
              commit('setIsAuthenticated', false);
          });
    },
  },
  getters: {  
    isAuthenticated: state => state.isAuthenticated
  }
}

export default userAuth;