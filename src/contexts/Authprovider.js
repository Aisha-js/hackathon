import React, { useEffect, useReducer } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = React.createContext();

const INIT_STATE = {
  user: null,
};

const reduser = (state, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const Authprovider = (props) => {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  const googleProvider = new GoogleAuthProvider();

  const authWithGoogle = async () => {
    try {
      signInWithPopup(auth, googleProvider);
      checkUser();
    } catch (error) {
      console.log(error);
    }
  };

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      let action = {
        type: "CHECK_USER",
        payload: user,
      };
      dispatch(action);
    });
  };

  useEffect(() => {
    checkUser();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authWithGoogle: authWithGoogle,
        logout: logout,
        user: state.user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
