// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCElh2CsFhEOJzWikw3hbHrh-08EXN1Jes",
  authDomain: "mapschedule-d22d5.firebaseapp.com",
  databaseURL: "https://mapschedule-d22d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mapschedule-d22d5",
  storageBucket: "mapschedule-d22d5.appspot.com",
  messagingSenderId: "271657628743",
  appId: "1:271657628743:web:55ecd19dae3ee3f787ed62",
  measurementId: "G-Y5NXRCRDDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);