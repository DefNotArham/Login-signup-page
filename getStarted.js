// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsoim_z51jKAnBVbxSG6AiDirURsSVXF4",
  authDomain: "project1-579f9.firebaseapp.com",
  projectId: "project1-579f9",
  storageBucket: "project1-579f9.firebasestorage.app",
  messagingSenderId: "499934781760",
  appId: "1:499934781760:web:561530a19ef80e77d35aa5",
  measurementId: "G-C898L5NNYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//inputs

// submit button
const submit = document.getElementById("createAccountBtn");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  const year = document.getElementById("dob-year").value;
  const month = document.getElementById("dob-month").value;
  const day = document.getElementById("dob-day").value;

  if (!email || !password || !username || !year || !month || !day) {
    alert("Please fill out all fields before creating an account.");
    return;
  }

  const birthyear = parseInt(year);
  const age = new Date().getFullYear() - birthyear;

  if (age < 13) {
    alert("You must be atleast 13 years old to create an account");
    return;
  }

  const dob = `${year}-${month}-${day}`;

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Signed up
      alert("Account Created");
      window.location.href = "login/login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});

/// adding years
const yearSelect = document.getElementById("dob-year");
const currentYear = new Date().getFullYear();
const startYear = 1900;

for (let year = currentYear; year >= startYear; year--) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}
