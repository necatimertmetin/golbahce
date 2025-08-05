// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIeb_caJwulqQarjeMpAw7iUI0CpU_vu4",
  authDomain: "golbahce-20148.firebaseapp.com",
  projectId: "golbahce-20148",
  storageBucket: "golbahce-20148.firebasestorage.app",
  messagingSenderId: "162361008533",
  appId: "1:162361008533:web:d0cf0a9d9fd58f8989d69c",
  measurementId: "G-KG2NHDZFK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
