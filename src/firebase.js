import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB7YCHKvIxXtICxDoL0M_EjrJTqHjCvJEw",
    authDomain: "disneyplus-clone-cd7d3.firebaseapp.com",
    projectId: "disneyplus-clone-cd7d3",
    storageBucket: "disneyplus-clone-cd7d3.appspot.com",
    messagingSenderId: "810649622814",
    appId: "1:810649622814:web:4086b29c17ccde1457110f"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;