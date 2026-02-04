import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCnmVyz140A5nf0366K8cCYbBocQfwLiAk",
  authDomain: "bookify-3b3c0.firebaseapp.com",
  projectId: "bookify-3b3c0",
  storageBucket: "bookify-3b3c0.firebasestorage.app",
  messagingSenderId: "432545949713",
  appId: "1:432545949713:web:5dceec0ffb6b5d7a5269b0",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
