// const { getMessaging, getToken } = require('firebase/messaging');
// const {initializeApp} =  require('firebase/app');
// import { getMessaging, getToken } from 'firebase/messaging';
// import {initializeApp} from 'firebase/app';

import {
  getMessaging,
  getToken,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCu538H8lbUh54nQg6Q8WohFFdKY2C8uYE",
  authDomain: "fms-pdsl.firebaseapp.com",
  projectId: "fms-pdsl",
  storageBucket: "fms-pdsl.appspot.com",
  messagingSenderId: "202877192295",
  appId: "1:202877192295:web:b32cc251da12646c4e2cc2",
  measurementId: "G-X44JK3Y8ED",
};
const app = initializeApp(FIREBASE_CONFIG);

const VAPID_KEY =
  "BO4AYo97O_R2lmD_q7kPzGI4rr2cMuQhCk1g5N9O-d5_alvIT7D0CqWxZFe-he-10hAS9uLRUs92D4CO5bwzhXQ";

const messaging = getMessaging(app);
console.log(messaging);

getToken(messaging, { vapidKey: VAPID_KEY })
  .then((currentToken) => {
    if (currentToken) {
      console.log({"token":currentToken});
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });
