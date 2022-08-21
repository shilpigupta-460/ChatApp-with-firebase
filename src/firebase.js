
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "chat-app-8e423.firebaseapp.com",
    projectId: "chat-app-8e423",
    storageBucket: "chat-app-8e423.appspot.com",
    messagingSenderId: "474312280253",
    appId: "1:474312280253:web:929bb58387839003108fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);