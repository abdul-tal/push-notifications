// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-messaging.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB39xSxaHiR2YAlwi6Suc1Uek_6L6W-bpw",
    authDomain: "test-firebase-web-push-bb5ad.firebaseapp.com",
    projectId: "test-firebase-web-push-bb5ad",
    storageBucket: "test-firebase-web-push-bb5ad.appspot.com",
    messagingSenderId: "823079035007",
    appId: "1:823079035007:web:b466e764e9e45b2f3b5f4a",
    measurementId: "G-PQN7X9RTEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Add the public key generated from the console here.

function subscribe() {
    Notification.requestPermission().then(permission => {
        console.log('permission: ', permission);
        if(permission === 'granted') {
            messaging.getToken({
                vapidKey: "BPp3xNvnrzHn6xU6RcChIQDi7GZlkcFlNZPaNJtolahGZbeBGYyrIya5rFEm2o61kc55OQWa-vp8dfKdILOavhI"
            }).then(currentToken => {
                console.log('currentToken: ', currentToken)
            })
        }
    })
}

