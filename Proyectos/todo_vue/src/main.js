import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCCAr8cKPXO_rtY8-4g7WXZREwS2Su88kc",
  authDomain: "todovue-24b9d.firebaseapp.com",
  databaseURL: "https://todovue-24b9d.firebaseio.com",
  projectId: "todovue-24b9d",
  storageBucket: "todovue-24b9d.appspot.com",
  messagingSenderId: "464815610419",
  appId: "1:464815610419:web:baa9c87cd71afa35612146"
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
