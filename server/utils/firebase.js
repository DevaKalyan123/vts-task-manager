// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "vtstaskmanager.firebaseapp.com",
  projectId: "vtstaskmanager",
  storageBucket: "vtstaskmanager.appspot.com",
  messagingSenderId: "1023477403825",
  appId: "1:1023477403825:web:aae8787dbb0b68c993d290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);