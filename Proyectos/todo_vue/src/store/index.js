import Vue from 'vue'
import Vuex from 'vuex'
import apartados from '../modules/apartados.js'
import contenido from '../modules/contenido.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    apartados,
    contenido,

  }
})
