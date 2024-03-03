// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3czcByNP-Z-2UR0wKtvuTTRP9n425GHU",
  authDomain: "app-f44c6.firebaseapp.com",
  projectId: "app-f44c6",
  storageBucket: "app-f44c6.appspot.com",
  messagingSenderId: "593133607413",
  appId: "1:593133607413:web:4bc477c943fa7ea69a68bc",
  databaseURL:'https://app-f44c6-default-rtdb.firebaseio.com'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);