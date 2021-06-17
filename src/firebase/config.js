//import firebase modules
import firebase from "firebase/app";
import "firebase/auth";

//App config
var firebaseConfig = {
  apiKey: "AIzaSyBeDDSRZMXFTwxDrshigaq4dCOizbjvdG0",
  authDomain: "moneywind.firebaseapp.com",
  projectId: "moneywind",
  storageBucket: "moneywind.appspot.com",
  messagingSenderId: "893866909761",
  appId: "1:893866909761:web:285faec92e68e533c4a6c0"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

export { projectAuth };
