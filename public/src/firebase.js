import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDdbmOHaHr1-935Ur7XvmXWI3WNaExQWZ4",
    authDomain: "uucss-queueing-system.firebaseapp.com",
    databaseURL: "https://uucss-queueing-system.firebaseio.com",
    projectId: "uucss-queueing-system",
    storageBucket: "uucss-queueing-system.appspot.com",
    messagingSenderId: "963296599914"
  };
firebase.initializeApp(config);
export default firebase;