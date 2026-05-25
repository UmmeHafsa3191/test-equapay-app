import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBg-X6qwBbVwquhBBP09OYWrbPGeWdgKj8",
  authDomain: "equapay-8b49c.firebaseapp.com",
  projectId: "equapay-8b49c",
  storageBucket: "equapay-8b49c.firebasestorage.app",
  messagingSenderId: "632345716049",
  appId: "1:632345716049:web:2097b25921bf061fde5f70",
  measurementId: "G-7MFH3VZ3GQ"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);