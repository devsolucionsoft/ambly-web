import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDes6ue9P39iVLxoq5dXhdVxyrpfwzvL3s",
  authDomain: "ambly-web.firebaseapp.com",
  projectId: "ambly-web",
  storageBucket: "ambly-web.appspot.com",
  messagingSenderId: "666022876350",
  appId: "1:666022876350:web:c76eab400f575e207cfaef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const facebook = new FacebookAuthProvider();
export const google = new GoogleAuthProvider();