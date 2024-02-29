// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDnhth43S6bdoJG4_TIoXXBIJi8961g0NM",
  authDomain: "projet2-66a4f.firebaseapp.com",
  projectId: "projet2-66a4f",
  storageBucket: "projet2-66a4f.appspot.com",
  messagingSenderId: "210261061280",
  appId: "1:210261061280:web:8b6f1eaed648a62f85a3c5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const storage = app.storage();

export { auth, db, storage };
