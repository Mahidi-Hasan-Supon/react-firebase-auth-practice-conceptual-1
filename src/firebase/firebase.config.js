// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDVmr_C_TFc_tPeAclqwYS-l2n3VGZZl8",
  authDomain: "fir-auth-practice-f9078.firebaseapp.com",
  projectId: "fir-auth-practice-f9078",
  storageBucket: "fir-auth-practice-f9078.firebasestorage.app",
  messagingSenderId: "496029285369",
  appId: "1:496029285369:web:d9351ad706fdbd5a471b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);