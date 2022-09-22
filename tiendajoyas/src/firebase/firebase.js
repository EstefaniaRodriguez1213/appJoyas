// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "dotenv/config"
import { collection, addDoc, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-joyas.firebaseapp.com",
  projectId: "react-joyas",
  storageBucket: "react-joyas.appspot.com",
  messagingSenderId: "845151962948",
  appId: "1:845151962948:web:39a8ca9a97e721c057f911",
  measurementId: "G-BMY2YPREL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db, app }
