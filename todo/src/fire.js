import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDRO9flyZBhILy095l1M4cRKzPtb0T8XXE",
    authDomain: "stellar-mercury-135123.firebaseapp.com",
    databaseURL: "https://stellar-mercury-135123.firebaseio.com",
    projectId: "stellar-mercury-135123",
    storageBucket: "stellar-mercury-135123.appspot.com",
    messagingSenderId: "368878854178"
};
var fire = firebase.initializeApp(config);
export default fire;    