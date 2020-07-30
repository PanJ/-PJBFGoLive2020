import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyDkctdUYp0EIF932Y01pI6eFVu8lVWsgbI",
  authDomain: "pjbfgolive2020.firebaseapp.com",
  databaseURL: "https://pjbfgolive2020.firebaseio.com",
  projectId: "pjbfgolive2020",
  storageBucket: "pjbfgolive2020.appspot.com",
  messagingSenderId: "887848468304",
  appId: "1:887848468304:web:76d1d00b25f9085409f655",
  measurementId: "G-2HNX76K2X6",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
