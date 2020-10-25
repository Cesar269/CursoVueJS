import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
  },
  mutations: {
    setProducts(state,payload){
      state.pokemons = payload;
    }
  },
  actions: {
    async getProducts({commit}){
      let data = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=0');
      let products = data.data.results;
       commit('setProducts',products);
      }
      
    },
    getters:{
      getPokemons(state){
        return state.pokemons;
      }

    },
  modules: {
  }
})
