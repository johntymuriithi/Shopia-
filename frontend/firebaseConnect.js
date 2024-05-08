// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "greenshopper-38a61.firebaseapp.com",
  projectId: "greenshopper-38a61",
  storageBucket: "greenshopper-38a61.appspot.com",
  messagingSenderId: "445119479057",
  appId: "1:445119479057:web:c9cbd480f5db62f4abe0b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
