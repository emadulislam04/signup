// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3veU8Y9Ht684ySgy4B0b47vyfgkOdquc",
    authDomain: "authorization-47527.firebaseapp.com",
    projectId: "authorization-47527",
    storageBucket: "authorization-47527.appspot.com",
    messagingSenderId: "540091004155",
    appId: "1:540091004155:web:c70c80ff441faa79942c5e",
    measurementId: "G-QD2ZXDLHK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)