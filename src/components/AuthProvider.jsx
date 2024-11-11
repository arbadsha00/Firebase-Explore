/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const name = "tamim";
    const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    };
    
  const logOut = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe=onAuthStateChanged(auth, (current) => {
      console.log(current);
      setUser(current);
    });
    return () => {
      unSubscribe();
    }

  },[])
  
    
  const authInfo = {
      name,
      user,
      createUser,
    logUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
