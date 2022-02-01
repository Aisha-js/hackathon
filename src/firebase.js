import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIhvOip1zOFTlasoB53ytDuxfxkRP8U0c",
  authDomain: "projectaisha-67e09.firebaseapp.com",
  projectId: "projectaisha-67e09",
  storageBucket: "projectaisha-67e09.appspot.com",
  messagingSenderId: "195058064594",
  appId: "1:195058064594:web:308ca1398e209c2e0ea10b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;
