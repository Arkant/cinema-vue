import firebase from 'firebase';

const imagesModule = {
  state: {
    image: null
  },
  mutations: { 
    setImageUrl(state, payload) {
      state.image = payload;
    }
  },
  actions: { 
    getImage({commit}, name) {
      firebase.storage()
      .ref(name)
      .getDownloadURL()
      .then(data =>
        commit('setImageUrl', data)
      );
      
    },
  },
  getters: { 
    setImageUrl : state => state.image
  }
}

export default imagesModule;