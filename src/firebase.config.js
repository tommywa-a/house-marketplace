import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMQY334MlxrS6qfqIsqTnHiKQRlP9u4o",
  authDomain: "house-marketplace-app-7eff7.firebaseapp.com",
  projectId: "house-marketplace-app-7eff7",
  storageBucket: "house-marketplace-app-7eff7.appspot.com",
  messagingSenderId: "176145156646",
  appId: "1:176145156646:web:2b714c1c160099f40a74e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()