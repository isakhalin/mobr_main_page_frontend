import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDZkdorJ3B3LynBWLKMSDDksN1jb2fKXeE",
  authDomain: "sakhmobr-startpage.firebaseapp.com",
  databaseURL: "https://sakhmobr-startpage-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sakhmobr-startpage",
  storageBucket: "sakhmobr-startpage.appspot.com",
  messagingSenderId: "172166008856",
  appId: "1:172166008856:web:102b91b276211ebaa4f36d",
  measurementId: "G-BNW3SM0ENC"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const database = getDatabase(firebase)
export const auth = getAuth(firebase);
export const analytics = getAnalytics(firebase);