import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios';
import VueAxios from 'vue-axios';


import firebase from 'firebase/app'
import 'firebase/firestore'

 var firebaseConfig = {
  apiKey: "AIzaSyC0dbYydsIPYr1Ev4xY4_Z1O7VbFkZxL0U",
  authDomain: "pccode-b3325.firebaseapp.com",
  databaseURL: "https://pccode-b3325.firebaseio.com",
  projectId: "pccode-b3325",
  storageBucket: "pccode-b3325.appspot.com",
  messagingSenderId: "46419336558",
  appId: "1:46419336558:web:fc696c4dbaf44d1def757f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
