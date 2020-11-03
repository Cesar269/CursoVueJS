import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default({
    namespaced: true,
    state: {
        pokemon: null,


    },
    mutations: {
        setInfo(state,payload){
            state.pokemon = payload;


        }

    },
    actions: {
        async getInfo(context,url){
            let data = await axios.get(url);  
                context.commit('setInfo',data.data); 
              
           

        }
    },
    getters: {
        getPokemon(state){
            return state.pokemon;
        }

    },
    modules: {


    }
})
