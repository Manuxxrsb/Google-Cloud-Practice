// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXZs4OUlckzAvfNPHGXNr7INutoS1L_LM",
  authDomain: "pr-cloud-fb.firebaseapp.com",
  projectId: "pr-cloud-fb",
  storageBucket: "pr-cloud-fb.firebasestorage.app",
  messagingSenderId: "528826016777",
  appId: "1:528826016777:web:fed5a477c0ddec680684d8",
  measurementId: "G-QS6S8Q3BLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);