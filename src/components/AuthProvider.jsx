/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
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
    
    onAuthStateChanged(auth, (current) => {
        if (current) {
            console.log("logged in :", current);
            setUser(current);
        }
        else {
            console.log("no user");
        }
    });
  const authInfo = {
      name,
      user,
      createUser,
      logUser ,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
