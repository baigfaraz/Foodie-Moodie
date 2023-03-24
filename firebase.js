// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv8npXZf0-xJLq7yIK379bLyTBNtfFBRA",
  authDomain: "foodie-moodie-1ab8f.firebaseapp.com",
  projectId: "foodie-moodie-1ab8f",
  storageBucket: "foodie-moodie-1ab8f.appspot.com",
  messagingSenderId: "452600872434",
  appId: "1:452600872434:web:b2616a4c9c7925ea19bf6b",
  measurementId: "G-54K0FXPM3J",
  databaseURL : "https://foodie-moodie-1ab8f-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;