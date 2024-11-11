// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqyhIP705nuxclBayiEJFkAzCoXff3ciI",
  authDomain: "fir-explore-c0243.firebaseapp.com",
  projectId: "fir-explore-c0243",
  storageBucket: "fir-explore-c0243.firebasestorage.app",
  messagingSenderId: "49160768959",
  appId: "1:49160768959:web:85ef5c82bea83ce12ba50a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
