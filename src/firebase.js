// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9LUGFq70dzCmSNvThxAo3Mu2WCqwqaqE",
    authDomain: "power-website-c4907.firebaseapp.com",
    databaseURL: "https://power-website-c4907-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "power-website-c4907",
    storageBucket: "power-website-c4907.appspot.com",
    messagingSenderId: "662817141011",
    appId: "1:662817141011:web:4450e5779b637e57b22ae6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);