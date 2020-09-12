import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCEN9YD7diUwaSosg1ipjbrKL3Dher3IxU",
    authDomain: "todo-youtobe-blue.firebaseapp.com",
    databaseURL: "https://todo-youtobe-blue.firebaseio.com",
    projectId: "todo-youtobe-blue",
    storageBucket: "todo-youtobe-blue.appspot.com",
    messagingSenderId: "814985858066",
    appId: "1:814985858066:web:919d6abd0c5743e5ae1ccb"
  };
 
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
export {db, firebase};