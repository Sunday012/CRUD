import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyARiPfj3d82jMFJvQpkxCuBvP4RGenSYIA",
  authDomain: "crud-70279.firebaseapp.com",
  projectId: "crud-70279",
  storageBucket: "crud-70279.appspot.com",
  messagingSenderId: "869252166307",
  appId: "1:869252166307:web:05cd38ddcd1cabc698c516",
  measurementId: "G-FQK09E0GD1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);