import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASGeGKQq-I1KcPXt9XhL36P0_1nH09pAM",
  authDomain: "nwitter-reloaded-61dd9.firebaseapp.com",
  projectId: "nwitter-reloaded-61dd9",
  storageBucket: "nwitter-reloaded-61dd9.appspot.com",
  messagingSenderId: "419668481508",
  appId: "1:419668481508:web:28f9b69535a3e7e341a3f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage  = getStorage(app);

export const db = getFirestore(app);