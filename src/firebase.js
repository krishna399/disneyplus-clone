import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC_v0pt5aQoKOoxhqEOrVOr9a1lluNX0oU",
    authDomain: "disneyplus-clone-a79ed.firebaseapp.com",
    projectId: "disneyplus-clone-a79ed",
    storageBucket: "disneyplus-clone-a79ed.appspot.com",
    messagingSenderId: "1001889538920",
    appId: "1:1001889538920:web:f3c891d0e32709a566ecdd",
    measurementId: "G-X50MH2LZQY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;