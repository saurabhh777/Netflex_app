import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCgv6t4yzUB2kU6P1f58-qR984g06nT-c",
  authDomain: "netflix-57a6e.firebaseapp.com",
  projectId: "netflix-57a6e",
  storageBucket: "netflix-57a6e.appspot.com",
  messagingSenderId: "362952990425",
  appId: "1:362952990425:web:028da3a96395e34db728c8",
  measurementId: "G-5GFXH07HSE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;