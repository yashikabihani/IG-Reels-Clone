import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDZNKkaIJljlXUK4g376Z8ZgM-VusM5qzc",
    authDomain: "ig-reels-clone-cf88c.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-cf88c.firebaseio.com",
    projectId: "ig-reels-clone-cf88c",
    storageBucket: "ig-reels-clone-cf88c.appspot.com",
    messagingSenderId: "788082053448",
    appId: "1:788082053448:web:37b5ced6ba2f29d782637d",
    measurementId: "G-ZHF848V8J6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;