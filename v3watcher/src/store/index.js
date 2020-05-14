import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
<<<<<<< Updated upstream
  }
})
=======
  },
  plugins: [vuexLocalStorage.plugin]
})
>>>>>>> Stashed changes
