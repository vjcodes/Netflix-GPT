// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPMj_vvtZj00EVIN4_AcqQ8hXjbU5-Alw",
  authDomain: "netflixgpt-3aec8.firebaseapp.com",
  projectId: "netflixgpt-3aec8",
  storageBucket: "netflixgpt-3aec8.appspot.com",
  messagingSenderId: "329382899803",
  appId: "1:329382899803:web:dc4bde9fe099847ca7cf7e",
  measurementId: "G-Y9VG77N688",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
