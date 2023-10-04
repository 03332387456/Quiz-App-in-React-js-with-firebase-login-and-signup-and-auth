// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6NNmQDFAPlIt1HWeshUj4wMYhcCGapWk",
  authDomain: "quiz-app-in-react-with-fb-auth.firebaseapp.com",
  databaseURL: "https://quiz-app-in-react-with-fb-auth-default-rtdb.firebaseio.com",
  projectId: "quiz-app-in-react-with-fb-auth",
  storageBucket: "quiz-app-in-react-with-fb-auth.appspot.com",
  messagingSenderId: "885161487813",
  appId: "1:885161487813:web:5b7527d64710fd786a6fac",
  measurementId: "G-EZ28JQV4F6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);