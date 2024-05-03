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
const app=initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const database  = firebase.database();