import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

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
  },
  plugins: [vuexLocalStorage.plugin]
})
