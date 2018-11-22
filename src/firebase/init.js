import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "........................................",
  authDomain: "chat-vuejs-firebase-737c7.firebaseapp.com",
  databaseURL: "https://chat-vuejs-firebase-737c7.firebaseio.com",
  projectId: "chat-vuejs-firebase-737c7",
  storageBucket: "chat-vuejs-firebase-737c7.appspot.com",
  messagingSenderId: "........................."
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
