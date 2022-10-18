// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeC_qvVDKZThpnue8D_KwBjEhK_nRYfCc",
    authDomain: "weekly-witness-world.firebaseapp.com",
    projectId: "weekly-witness-world",
    storageBucket: "weekly-witness-world.appspot.com",
    messagingSenderId: "1028267758116",
    appId: "1:1028267758116:web:93993daeab8b7c0096feb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;