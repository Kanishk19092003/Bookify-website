import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

//creating context
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCnmVyz140A5nf0366K8cCYbBocQfwLiAk",
  authDomain: "bookify-3b3c0.firebaseapp.com",
  projectId: "bookify-3b3c0",
  storageBucket: "bookify-3b3c0.firebasestorage.app",
  messagingSenderId: "432545949713",
  appId: "1:432545949713:web:5dceec0ffb6b5d7a5269b0",
};

//custom hook
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig); //intialize firebase (step 1)
const firebaseAuth = getAuth(firebaseApp); //firebase authentication using email and password
const googleProvider = new GoogleAuthProvider(); //google authentication
const firestore = getFirestore(firebaseApp); //firestore data

//firebase provider for all the pages and components
export const FirebaseProvider = (props) => {
  //check user login or not
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  //signUp
  const signupWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  //signIn
  const singinUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  //signup wihr google
  const signupWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  //checking user
  const isLoggedIn = user ? true : false;

  //addlisting
  const handleCreateNewListing = async (name, isbn, price) => {
  if (!user) {
    throw new Error("User not logged in");
  }

  return await addDoc(collection(firestore, "books"), {
    name,
    isbn,
    price,
    userID: user.uid,
    userEmail: user.email,
    createdAt: new Date(),
  });
};

  return (
    <FirebaseContext.Provider
      value={{
        signupWithGoogle,
        signupWithEmailAndPassword,
        singinUserWithEmailAndPassword,
        isLoggedIn,
        handleCreateNewListing,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
