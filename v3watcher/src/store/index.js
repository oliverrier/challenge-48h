import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

const axios = require('axios');

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage,
  reducer: state => ({
    favoriteList: state.favoriteList,
  })
})

export default new Vuex.Store({
  state: {
    stationList: null,
    favoriteList: [],
  },
  mutations: {
    async updateStations(state) {
      let dataStation = await axios.get(`https://api.alexandredubois.com/vcub-backend/vcub.php`);
      state.stationList = dataStation.data;
    },
    addFavorite(state, val) {
      state.favoriteList.push(val);
    },
    deleteAllFavorite(state) {
      state.favoriteList = [];
    },
    deleteFavorite(state, val) {
      let index = state.favoriteList.indexOf(val);
      state.favoriteList.splice(index, 1);
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})