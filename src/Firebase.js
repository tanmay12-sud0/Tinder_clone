import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDRBYsBVHnZsbEtTARLMq52MfUT0NQ8ib4",
  authDomain: "tiktok-clone-8c209.firebaseapp.com",
  databaseURL: "https://tiktok-clone-8c209.firebaseio.com",
  projectId: "tiktok-clone-8c209",
  storageBucket: "tiktok-clone-8c209.appspot.com",
  messagingSenderId: "976117305726",
  appId: "1:976117305726:web:a377c26dcee3851fb6632f",
  measurementId: "G-XTW0V0SH78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

export default database;