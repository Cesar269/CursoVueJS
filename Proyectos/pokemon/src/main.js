import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.use(VueAxios, axios)
import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyDracIQUnUb9HhtHEXS8OJ4sxj1zroYnGI",
  authDomain: "pokemon-e469d.firebaseapp.com",
  databaseURL: "https://pokemon-e469d.firebaseio.com",
  projectId: "pokemon-e469d",
  storageBucket: "pokemon-e469d.appspot.com",
  messagingSenderId: "343051478649",
  appId: "1:343051478649:web:3b170b26d6c01860ae56a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();



Vue.config.productionTip = false







new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
