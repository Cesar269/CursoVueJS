import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../main'
Vue.use(Vuex)


export default ({
    namespaced: true,
    state: {
      titulo:'',
      tareas:[],
        },
    mutations: {
      setTareas(state,payload){
          state.tareas.push(payload);
      }
    },
    actions: {
      async getTareas(context,apartado){
        try {
            const tarea = await db.collection('Tareas').where("apartado","==",apartado).get();
            tarea.forEach((doc) =>{
                context.commit('setTareas',doc.data())
                console.log(doc.data())
            })

        } catch (error) {
            console.error(error);
        }
    }
    },
    getters: {
      
    }

})