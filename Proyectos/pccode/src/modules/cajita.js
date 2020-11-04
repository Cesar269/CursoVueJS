import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../main'
Vue.use(Vuex)


export default ({
    namespaced: true,
    state: {
        cajitaPokemons: [],

    },
    mutations: {
        setCajita(state,payload) {
            state.cajitaPokemons.push(payload);
        }
    },
    actions: {
        async getCajita(context){
            try {
                const caja = await db.collection('cajita').get();
                caja.forEach((doc) =>{
                    context.commit('setCajita',doc.data())
                })

                
            } catch (error) {
                console.error(error);
            }
        },
        async guardarCajita(context,info){
            try {
                await db.collection('cajita').add(info);
                context.commit('setCajita',info);
            } catch (error) {
                console.error(error);
            }

        }

    },
    getters: {
        getLength(state){
            return state.cajitaPokemons.length;
        },
        getCajitas(state){
            return state.cajitaPokemons;
        }

    }

})
