import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default({
    namespaced: true,
    state: {
        pokemones:[],


    },
    mutations: {
        setProducts(state,payload){
            state.pokemones = payload;
          }

    },
    actions: {
        async getPokemones({commit}){
            let data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0');
            let products = data.data.results;
             commit('setProducts',products);
            }
    },
    getters: {
        pokemon(state){
            return state.pokemones;
          }

    },
    modules: {


    }
})
