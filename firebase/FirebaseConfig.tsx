
import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA-0CQgcnAy-7bo6mEGGrqawN7HGPu8NPo",
  authDomain: "teamup-cacf6.firebaseapp.com",
  projectId: "teamup-cacf6",
  storageBucket: "teamup-cacf6.appspot.com",
  messagingSenderId: "445500623502",
  appId: "1:445500623502:web:b966402ebfaa7aef8717df",
  measurementId: "G-EKQ9WG59XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)