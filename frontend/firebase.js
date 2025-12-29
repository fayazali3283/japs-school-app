// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// 1️⃣ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDINboJKfufYQc-r98kX8Ok8wB6ZePwKrw",
  authDomain: "school-management-app-f49f4.firebaseapp.com",
  projectId: "school-management-app-f49f4",
  storageBucket: "school-management-app-f49f4.appspot.com",
  messagingSenderId: "441418681530",
  appId: "1:441418681530:web:fcbbffb08ac2f9df158683",
  measurementId: "G-Q7ZX49LT4L"
};

// 2️⃣ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 3️⃣ Export everything your index.html needs
export { db, collection, addDoc, onSnapshot, serverTimestamp };
