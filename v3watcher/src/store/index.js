import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

<<<<<<< HEAD
<<<<<<< Updated upstream
export default new Vuex.Store({
  state: {
=======
const axios = require('axios');

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage,
  reducer: state => ({
    listeStations: state.listeStations,
  })
})

export default new Vuex.Store({
  state: {
    listeStations: null,

>>>>>>> Stashed changes
=======

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage,
  reducer: state => ({
    monStateQueJeVeuxRendrePersistant: state.monStateQueJeVeuxRendrePersistant,
  })
})

export default new Vuex.Store({
  state: {
    monStateQueJeVeuxRendrePersistant: null,
>>>>>>> master
  },
  mutations: {
    async updateStations(state) {
      let dataStations = await axios.get(`https://api.alexandredubois.com/vcub-backend/vcub.php`);
      state.listeStations = dataStations.data;
    }
  },
  actions: {
  },
  modules: {
<<<<<<< HEAD
<<<<<<< Updated upstream
  }
})
=======
  },
  plugins: [vuexLocalStorage.plugin]
})
>>>>>>> Stashed changes
=======
  },
  plugins: [vuexLocalStorage.plugin]
})
>>>>>>> master
