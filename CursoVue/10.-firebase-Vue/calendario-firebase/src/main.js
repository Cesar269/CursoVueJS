import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextAreaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextAreaAutosize)

import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_cCkw-E7IBCTqgs8hk8zs35j8CDiy070",
  authDomain: "calendario-firebase-a159f.firebaseapp.com",
  databaseURL: "https://calendario-firebase-a159f.firebaseio.com",
  projectId: "calendario-firebase-a159f",
  storageBucket: "calendario-firebase-a159f.appspot.com",
  messagingSenderId: "641525033373",
  appId: "1:641525033373:web:bcf1c8ec9d844a2b3e2774"
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
