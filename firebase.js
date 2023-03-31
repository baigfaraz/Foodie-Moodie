// // Import the functions you need from the SDKs you need
// import { initializeApp , firebase } from "firebase/app";
// // import { firebase } from "@react-native-firebase/auth";
//  import 'firebase/auth';
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAv8npXZf0-xJLq7yIK379bLyTBNtfFBRA",
//   authDomain: "foodie-moodie-1ab8f.firebaseapp.com",
//   projectId: "foodie-moodie-1ab8f",
//   storageBucket: "foodie-moodie-1ab8f.appspot.com",
//   messagingSenderId: "452600872434",
//   appId: "1:452600872434:web:b2616a4c9c7925ea19bf6b",
//   measurementId: "G-54K0FXPM3J",
//   databaseURL : "https://foodie-moodie-1ab8f-default-rtdb.asia-southeast1.firebasedatabase.app"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTtXLea7dJG7L31xt4YfM2RJUHdREfNOs",
  authDomain: "foodie-moodie-1.firebaseapp.com",
  databaseURL: "https://foodie-moodie-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "foodie-moodie-1",
  storageBucket: "foodie-moodie-1.appspot.com",
  messagingSenderId: "865278816452",
  appId: "1:865278816452:web:5dd34be4944d4253d29991",
  measurementId: "G-W54BCSPWHP",
  databaseURL : "https://foodie-moodie-1-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const analytics = getAnalytics(app);


export {app, auth};