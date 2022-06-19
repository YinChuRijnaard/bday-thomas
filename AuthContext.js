import { createContext, useContext, useState } from "react";
import { auth, db } from "./firebase";
import {
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

// @ts-ignore
const Auth = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const init = () => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        // @ts-ignore
        setUser(user);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };

  init();

  return (
    <Auth.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;

export const AuthState = () => useContext(Auth);

// Do I have excess code?
