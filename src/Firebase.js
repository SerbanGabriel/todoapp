import firebase from 'firebase'

 var config = {
    apiKey: "AIzaSyDuoBY6l8kpG88zDnjiVht91uPHpzQxkq4",
    authDomain: "todoapp-963f5.firebaseapp.com",
    databaseURL: "https://todoapp-963f5.firebaseio.com",
    projectId: "todoapp-963f5",
    storageBucket: "todoapp-963f5.appspot.com",
    messagingSenderId: "935994449644",
    appId: "1:935994449644:web:06347e74415bf51e05cfc9",
    measurementId: "G-D8SEP8QJ5S"
  };


  firebase.initializeApp(config);


  export default firebase