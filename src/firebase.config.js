import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAd9uH7_XTIXxgfwwZ23sk8YDkg_qaHGEk",
  authDomain: "aahaaramservices.firebaseapp.com",
  projectId: "aahaaramservices",
  storageBucket: "aahaaramservices.appspot.com",
  messagingSenderId: "354417551986",
  appId: "1:354417551986:web:ec0ef47a7721896e77b0eb",
  measurementId: "G-PGPE6M466T"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
