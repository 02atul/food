// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-eCS8wbeRIMLgF52GhXqpP9aOfNijvt8",
  authDomain: "netflixgpt-9597d.firebaseapp.com",
  projectId: "netflixgpt-9597d",
  storageBucket: "netflixgpt-9597d.appspot.com",
  messagingSenderId: "803291637187",
  appId: "1:803291637187:web:1701561d11b5e102fe0976",
  measurementId: "G-JPZJYZ3N2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export const auth = getAuth();