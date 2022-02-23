import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDSkOIjf8ow6lWVCa6a4KmkUhdZBH9gB0Q",
    authDomain: "xanticohostal-a9d46.firebaseapp.com",
    projectId: "xanticohostal-a9d46",
    storageBucket: "xanticohostal-a9d46.appspot.com",
    messagingSenderId: "387190236797",
    appId: "1:387190236797:web:038b5eea164bfdb6c0f314",
    measurementId: "G-ZN8CZQPRMK"
};


export const app = initializeApp(firebaseConfig);