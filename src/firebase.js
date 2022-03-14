import firebase from "firebase";


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAzdR7x0nMLFEwCkGo4n4fz7tH-pud_kNE",
    authDomain: "kshitijupmanyu.firebaseapp.com",
    projectId: "kshitijupmanyu",
    storageBucket: "kshitijupmanyu.appspot.com",
    messagingSenderId: "527911319793",
    appId: "1:527911319793:web:68b5a75a6bd0bff1be5150",
    measurementId: "G-BHXP8XE1HF"
  })

  const db = firebaseApp.firestore();


  export default db; 