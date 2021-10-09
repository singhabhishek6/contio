import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBLb9ZaNHKMm2myQ-dkz8BLyRC0OOVXgk0",
    authDomain: "conio-chatbot.firebaseapp.com",
    projectId: "conio-chatbot",
    storageBucket: "conio-chatbot.appspot.com",
    messagingSenderId: "399191542374",
    appId: "1:399191542374:web:6436cd38f73f96722b7ba7",
  })
  .auth()
