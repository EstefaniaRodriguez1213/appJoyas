// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDoc, doc, getDocs, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: "react-joyas.firebaseapp.com",
  projectId: "react-joyas",
  storageBucket: "react-joyas.appspot.com",
  messagingSenderId: "845151962948",
  appId: "1:845151962948:web:39a8ca9a97e721c057f911",
  measurementId: "G-BMY2YPREL4"
};

const getProducto = (id) => {
  getDoc(doc(db, "productos", id));
}

const getProductos = () => {
  getDocs(collection(db, "productos"));
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db, app, getProducto, getProductos }
