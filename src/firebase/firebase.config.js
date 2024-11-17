// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCygpJ8ndQ1UJrl61jvT1hcWSj6hyMbtlE",
  // authDomain: "dragon-news-projects-d06b3.firebaseapp.com",
  // projectId: "dragon-news-projects-d06b3",
  // storageBucket: "dragon-news-projects-d06b3.firebasestorage.app",
  // messagingSenderId: "497225153912",
  // appId: "1:497225153912:web:71e3e53ff9432590ef9c8d"



  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId


  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;