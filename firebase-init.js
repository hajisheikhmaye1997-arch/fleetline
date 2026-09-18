// firebase-init.js
// Shared Firebase setup for the Fleetline owner dashboard and driver app.
//
// SETUP (one-time):
// 1. Go to https://console.firebase.google.com -> Create project (free "Spark" plan is enough).
// 2. Build > Authentication -> Get started -> enable "Email/Password".
// 3. Build > Firestore Database -> Create database -> Production mode -> pick a region.
// 4. Build > Storage -> Get started (used for driver trip photos / proof of delivery).
// 5. Project settings (gear icon) -> General -> "Your apps" -> Add app -> Web (</>) ->
//    copy the firebaseConfig object it gives you and paste it below, replacing the placeholder.
// 6. In Firestore, paste the security rules from firestore.rules (via Firestore -> Rules tab).
// 7. In Storage, paste the rules from storage.rules (via Storage -> Rules tab).
//
// This same file is imported by both index.html (owner) and driver.html (driver) —
// edit it once here and copy it into both folders when you deploy.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiQpeHO5-nN5D9UYMfmj5VvCXqOBtyS30",
  authDomain: "fleetline-5ea54.firebaseapp.com",
  projectId: "fleetline-5ea54",
  storageBucket: "fleetline-5ea54.firebasestorage.app",
  messagingSenderId: "842011879289",
  appId: "1:842011879289:web:0657053c5b8b5c0bfbf1a8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
