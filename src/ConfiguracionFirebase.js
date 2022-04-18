import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAj4TQupuTRZRE6Dsb0jX8j_4QJo6vzy58",
  authDomain: "login-itla.firebaseapp.com",
  projectId: "login-itla",
  storageBucket: "login-itla.appspot.com",
  messagingSenderId: "1055159533130",
  appId: "1:1055159533130:web:3725011768a7a5cf69b0b3"
};

const fire = firebase.initializeApp(firebaseConfig);
export const basededato=fire.firestore();
export default fire;


