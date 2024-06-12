import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZdvrXXYxln1cG4YdDQrlZJy_17mFSN5c",
  authDomain: "instagram-clone-f0e36.firebaseapp.com",
  projectId: "instagram-clone-f0e36",
  storageBucket: "instagram-clone-f0e36.appspot.com",
  messagingSenderId: "44555404627",
  appId: "1:44555404627:web:50a949fabaf3a1f9158da6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();