import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY7kGTEOUlQNDdQcHi2nE89iXr9AyVupo",
  authDomain: "clone-bda88.firebaseapp.com",
  projectId: "clone-bda88",
  storageBucket: "clone-bda88.firebasestorage.app",
  messagingSenderId: "130295493558",
  appId: "1:130295493558:web:88f20b0ab3a1288b604717"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db= app.firestore()