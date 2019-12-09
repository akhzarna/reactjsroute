import * as firebase from 'firebase';

var firebaseConfig = {
   apiKey: "AIzaSyB2EGKqBxec5iaPkZUZ-ENHa5cgP01RpYo",
   authDomain: "fir-ntu.firebaseapp.com",
   databaseURL: "https://fir-ntu.firebaseio.com",
   projectId: "fir-ntu",
   storageBucket: "fir-ntu.appspot.com",
   messagingSenderId: "855625817249",
   appId: "1:855625817249:web:34f75359ea304b97caa4e0",
   measurementId: "G-QVE2DYL3LL"
 };
 // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;
