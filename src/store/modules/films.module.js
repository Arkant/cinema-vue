// import firebase from 'firebase';
// import router from '@/router'
import { db } from '../../main';

const filmsModule = {
  state: {
    films: []
  },
  mutations: { 
    setAllFilms(state, payload) {
      payload.forEach(doc => {
        state.films.push(doc.data());
      })
    }
  },
  actions: { 
    getAllFilms({commit}) {
      db.collection('films').get().then((snapshot) => {
        commit('setAllFilms', snapshot.docs);
      });
    }
  },
  getters: { 
    getAllFilms : state => state.films
  }
}

export default filmsModule;