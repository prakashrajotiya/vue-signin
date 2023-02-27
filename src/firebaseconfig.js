// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCT2e4z1AyAc4bce2y9Tvv3nQvX20lNpVI",
  authDomain: "login-e64f5.firebaseapp.com",
  projectId: "login-e64f5",
  storageBucket: "login-e64f5.appspot.com",
  messagingSenderId: "461149944232",
  appId: "1:461149944232:web:ed3e8c829fc29003f2859d",
  measurementId: "G-4D7PYEDFDP",
};
initializeApp(firebaseConfig);
// import { getAuth } from "firebase/auth";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

// firebase.initializeApp(app);
// const analytics = getAnalytics(app);
const auth = getAuth();
export { auth };
