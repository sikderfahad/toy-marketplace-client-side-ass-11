import { useEffect, useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleUser = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubUser = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const signInWithEmailPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const loginWithEmailPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const userProfile = (user, name) => {
    return updateProfile(user, name);
  };

  const userLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const authInfo = {
    user,
    loading,
    googleUser,
    userLogout,
    githubUser,
    signInWithEmailPass,
    userProfile,
    loginWithEmailPass,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
