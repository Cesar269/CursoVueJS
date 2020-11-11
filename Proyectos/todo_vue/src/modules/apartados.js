import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../main'
Vue.use(Vuex)


export default ({
    namespaced: true,
    state: {
       apartados:[],
    },
    mutations: {
       setApartados(state,payload){
           state.apartados.push(payload)
       }
    },
    actions: {
        async getApartados(context){
            try {
                const apartado = await db.collection('Apartados').get();
                apartado.forEach((doc) =>{
                    context.commit('setApartados',doc.data())
                })

            } catch (error) {
                console.error(error);
            }
        }
    },
    getters: {
      getState(state){
        return state.apartados;
      }
    }

})