// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnN5ZuFFZFVLoM77CUKOgXXaWAHM1AlME",
    authDomain: "testing-c557c.firebaseapp.com",
    projectId: "testing-c557c",
    storageBucket: "testing-c557c.appspot.com",
    messagingSenderId: "214360589298",
    appId: "1:214360589298:web:3b9e4462057d0d399fa16b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
    const googleLogin = document.getElementById("google-btn");

    googleLogin.addEventListener("click", () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // Redirect to home page after successful login
                window.location.href = "../home.html";
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error(`Error ${errorCode}: ${errorMessage}`);
            });
    });
});