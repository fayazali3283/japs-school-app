import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDINboJKfufYQc-r98kX8Ok8wB6ZePwKrw",
  authDomain: "school-management-app-f49f4.firebaseapp.com",
  projectId: "school-management-app-f49f4",
  storageBucket: "school-management-app-f49f4.firebasestorage.app",
  messagingSenderId: "441418681530",
  appId: "1:441418681530:web:fcbbffb08ac2f9df158683",
  measurementId: "G-Q7ZX49LT4L"
};

const app = initializeApp(firebaseConfig);

// These exports allow Signup.jsx and Teachers.jsx to work
export const auth = getAuth(app);
export const db = getFirestore(app);

