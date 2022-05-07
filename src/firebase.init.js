// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqBRv7gj0bgX6dJmMqoupQfFVtilGxX4",
  authDomain: "bicycle-assignment.firebaseapp.com",
  projectId: "bicycle-assignment",
  storageBucket: "bicycle-assignment.appspot.com",
  messagingSenderId: "811756911849",
  appId: "1:811756911849:web:8f501f5f4f5c96c1e18478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth