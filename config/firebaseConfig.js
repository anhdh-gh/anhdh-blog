// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { ref, getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://anhdh-blog-b2d4b-default-rtdb.asia-southeast1.firebasedatabase.app',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  projectId: process.env.FIREBASE_PROJECT_ID || "anhdh-blog-b2d4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDB = getDatabase(app);