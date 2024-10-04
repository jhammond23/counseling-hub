// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoVkL01LT-Dyz_ZI_9n5HYjuftzGJZSdE",
  authDomain: "counseling-website-9b4db.firebaseapp.com",
  projectId: "counseling-website-9b4db",
  storageBucket: "counseling-website-9b4db.appspot.com",
  messagingSenderId: "286709684761",
  appId: "1:286709684761:web:b65314d83b8e042f53e888",
  measurementId: "G-CN3FXQWHZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { app, analytics, auth, db }; // Export the Firebase app, analytics, and auth instances
