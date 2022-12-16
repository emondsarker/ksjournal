import { initializeApp, getApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getStorage, uploadBytes } from 'firebase/storage';
import { getFirestore, doc } from "firebase/firestore"


const firebaseApp = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};




export const app = initializeApp(firebaseApp);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
