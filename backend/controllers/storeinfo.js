import { db } from "../config/firebaseConnector.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(email, password);

        await setDoc(doc(db, "users", userCredential.user.uid), {
            email: email,
            password,
            createdAt: new Date()
        });

        alert("Account created successfully!");
        window.location.href = "https://www.paypal.com/signin?country.x=PH&locale.x=en_US";
        console.log(userCredential.user);

    } catch (error) {
        alert(error.message);
        console.error(error);
    }
});
