import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCng_k4DKdELtfJzFp6ioyHuO0-pkaoziA",
  authDomain: "primeflix-3220a.firebaseapp.com",
  projectId: "primeflix-3220a",
  storageBucket: "primeflix-3220a.appspot.com",
  messagingSenderId: "275299174908",
  appId: "1:275299174908:web:1257a2b65f8cb4a1abca79",
  measurementId: "G-75RWXLS18X",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
