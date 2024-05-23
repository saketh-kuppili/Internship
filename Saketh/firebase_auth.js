  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js"
  import { getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBD8edAS6sfSqtbfPSQj_CTdUnoDy3oqRw",
    authDomain: "internship-92a01.firebaseapp.com",
    databaseURL: "https://internship-92a01-default-rtdb.firebaseio.com",
    projectId: "internship-92a01",
    storageBucket: "internship-92a01.appspot.com",
    messagingSenderId: "630453992332",
    appId: "1:630453992332:web:01dce9f7190b0f80acb4a9",
    measurementId: "G-9F2KYKVYT7"
  };

  // Initialize Firebase

  function showMessage(message,divId){
    var messageDiv = document.getElementById(divId)
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
      messageDiv.style.opacity=0;
    },5000); 
  }

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const signUp = document.getElementById("submitBtn") 
  signUp.addEventListener('click',(event)=>{
    event.preventDefault();
    const form = document.getElementById('loginForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    // const errorMessage = document.getElementById('errorMessage');

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        const userData = {
            email: email,
            name: name
        };
        showMessage('Account Created Successfully','errorMessage');
        const docRef = doc(db,"users",user.uid);
        setDoc(DocRef,userData)
        .this(()=>{
          window.location.href = 'index.html'
        })
        .catch((error)=>{
          console.error("error writing document",error)
        });

    })

    .catch((error)=>{
      const errorCode=error.code;
      if(errorCode=='auth/email-already-in-use'){
        showMessage("Email already exists",'errorMessage')
      }
      else{
        showMessage("Unable to create user",'errorMessage')
      }
    })

  })
