import firebase from 'firebase';
import router from '@/router';

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
    }
   },
  actions: {  
    userJoin({ commit }, { email, password }) {
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
    }
  },
  getters: {  }
}

export default userAuth;