import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyADDAG9RO7anoSIFmuPUyLkEQKG11lY6sE",
    authDomain: "xantico-990ea.firebaseapp.com",
    projectId: "xantico-990ea",
    storageBucket: "xantico-990ea.appspot.com",
    messagingSenderId: "320058487382",
    appId: "1:320058487382:web:50c3dccb7b3cbe986301f7",
    measurementId: "G-45VKCKGNNP"
};


export const app = initializeApp(firebaseConfig);