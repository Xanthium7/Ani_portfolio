// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyRKLayXCgwiybH93eAwi7M4jTkTLfHx8",
  authDomain: "ani-port.firebaseapp.com",
  projectId: "ani-port",
  storageBucket: "ani-port.appspot.com",
  messagingSenderId: "441022250085",
  appId: "1:441022250085:web:9b37e5d195d566dbe55a8c",
  measurementId: "G-W5EQDKSZJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);