// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAxEy_47r4wrtwim3MCkxqIODXM20c2P8",
  authDomain: "e-commerce-yt.firebaseapp.com",
  projectId: "e-commerce-yt",
  storageBucket: "e-commerce-yt.appspot.com",
  messagingSenderId: "582805802112",
  appId: "1:582805802112:web:14521a63fd754aa5ba6a65",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
