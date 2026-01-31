import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCUIl7Kg3Wk3sbC9cy9zCUgFIUcXivE7D4",
    authDomain: "replica-4ef80.firebaseapp.com",
    projectId: "replica-4ef80",
    storageBucket: "replica-4ef80.appspot.com",
    messagingSenderId: "346948485333",
    appId: "1:346948485333:web:01f0a815f6e110827da25c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
