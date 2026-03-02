// firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYH_yjOYExXPCR2TBr6FT4gcctwJup3aE",
  authDomain: "gigglegram-776cf.firebaseapp.com",
  projectId: "gigglegram-776cf",
  storageBucket: "gigglegram-776cf.firebasestorage.app",
  messagingSenderId: "841847055751",
  appId: "1:841847055751:web:879393cf9449d9d27ddf22",
  measurementId: "G-H9VV8PNDLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Firestore Database
export const db = getFirestore(app);
