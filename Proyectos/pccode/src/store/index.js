import Vue from 'vue'
import Vuex from 'vuex'
import pokemon from '@/modules/pokemon.js'
import pokemones from '@/modules/pokemones.js'
import cajita from '@/modules/cajita.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {


  },
  modules: {
    pokemon,
    pokemones,
    cajita,
  }
})
