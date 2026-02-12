import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Authentication
import { getFirestore } from 'firebase/firestore'; // Database
import { getStorage } from 'firebase/storage'; // File Storage

// YOUR FIREBASE CONFIGURATION GOES HERE
// Replace with keys from Firebase Console -> Project Settings
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
