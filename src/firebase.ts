import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8QRAUCewvBpNCttyGozAgusddJfMvafo",
  authDomain: "dog-walking-co.firebaseapp.com",
  projectId: "dog-walking-co",
  storageBucket: "dog-walking-co.appspot.com",
  messagingSenderId: "612998471169",
  appId: "1:612998471169:web:c3b3005239fff847d5ea00",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  db,
};
