import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAn0S0tGO8PEnYxOXoe3Sp7qNlFCltrJXg",
    authDomain: "slack-clone-d621d.firebaseapp.com",
    databaseURL: "https://slack-clone-d621d-default-rtdb.firebaseio.com",
    projectId: "slack-clone-d621d",
    storageBucket: "slack-clone-d621d.appspot.com",
    messagingSenderId: "123325833692",
    appId: "1:123325833692:web:245374e947f58bf4efaf19",
    measurementId: "G-1S8EX71XEJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;