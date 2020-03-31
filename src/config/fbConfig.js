import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVNrMQqbOlK7tR_B_5gpOdzhRlveNNWp8",
    authDomain: "project-planner-53d2c.firebaseapp.com",
    databaseURL: "https://project-planner-53d2c.firebaseio.com",
    projectId: "project-planner-53d2c",
    storageBucket: "project-planner-53d2c.appspot.com",
    messagingSenderId: "301957039812",
    appId: "1:301957039812:web:a5639b2f3bb21546e02b91",
    measurementId: "G-N750FYDNCD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase
