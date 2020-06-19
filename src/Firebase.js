import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBMeKnfYOfsUh6zv5mWebH8WCTbeFu0LlU",
  authDomain: "todoapp-b1067.firebaseapp.com",
  databaseURL: "https://todoapp-b1067.firebaseio.com",
  projectId: "todoapp-b1067",
  storageBucket: "todoapp-b1067.appspot.com",
  messagingSenderId: "285288366587",
  appId: "1:285288366587:web:08c458824efe37b2734b5e",
  measurementId: "G-FKFNVJFBQN"
};


firebase.initializeApp(config);


export default firebase