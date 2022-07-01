// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaNFnR4GwYkVe_NHz-oWDNXLVqV4-kW70",
  authDomain: "insta-2-remake.firebaseapp.com",
  projectId: "insta-2-remake",
  storageBucket: "insta-2-remake.appspot.com",
  messagingSenderId: "898328844009",
  appId: "1:898328844009:web:ea59418b916a35c2008278"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}

