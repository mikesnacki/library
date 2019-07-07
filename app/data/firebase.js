
import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
    apiKey: "AIzaSyDq7tXpfZuN8YKrRuuVPw4CR8wIBU03fZM",
    authDomain: "library-8c110.firebaseapp.com",
    databaseURL: "https://library-8c110.firebaseio.com",
    projectId: "library-8c110",
    storageBucket: "",
    messagingSenderId: "1043489108346",
    appId: "1:1043489108346:web:e949a8f471ce3af4"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;