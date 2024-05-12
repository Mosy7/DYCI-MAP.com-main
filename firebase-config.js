// Import the functions you need from the SDKs you need
"https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js";
"https://www.gstatic.com/firebasejs/8.5.0/firebase-analytics.js";
"https://www.gstatic.com/firebasejs/8.5.0/firebase-database.js";
"https://www.gstatic.com/firebasejs/8.5.0/firebase-auth.js";
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
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();


