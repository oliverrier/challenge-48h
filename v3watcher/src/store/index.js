import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

const axios = require('axios');

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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
