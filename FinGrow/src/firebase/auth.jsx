import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgsEnbSp8OWMWzSGblF-sJJsBHndmQmEE",
  authDomain: "fingrow-cc429.firebaseapp.com",
  projectId: "fingrow-cc429",
  storageBucket: "fingrow-cc429.appspot.com", // ✅ FIXED storageBucket
  messagingSenderId: "809985670913",
  appId: "1:809985670913:web:70f84191cdbcf588de6500",
  measurementId: "G-4DX0JM5T54",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
