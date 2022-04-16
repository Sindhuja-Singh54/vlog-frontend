// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHhGU1VVuXuxAT9yEtejYejmJwN_BJtco",
  authDomain: "blog-4347b.firebaseapp.com",
  projectId: "blog-4347b",
  storageBucket: "blog-4347b.appspot.com",
  messagingSenderId: "266029739240",
  appId: "1:266029739240:web:f582b12e96049156b9ed5d",
  measurementId: "G-EKBSNPMEZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);