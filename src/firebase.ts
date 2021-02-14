import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD3glPZ14DXP7EQZOwZD6QiLmSXq7OS1E4",
    authDomain: "pwa-practice-ehmusman.firebaseapp.com",
    projectId: "pwa-practice-ehmusman",
    storageBucket: "pwa-practice-ehmusman.appspot.com",
    messagingSenderId: "1076902186065",
    appId: "1:1076902186065:web:9cc91a3d04958550953c70",
    measurementId: "G-GSKHNTDK09"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;