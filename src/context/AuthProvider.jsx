import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading,setLoading] = useState(true)
  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailAndPasswordFunc = (email, password) => {
      setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutFunc = () => {
      setLoading(true)
    return signOut(auth);
  };
  const signInWithPopupFunc = () => {
      setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithPopupGitFunc = () => {
      setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };
  const sendEmailVerificationFunc = () => {
      setLoading(true)
    return sendEmailVerification(auth.currentUser);
  };
  const updateProfileFunc = (displayName, photoURL) => {
      setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signOutFunc,
    signInWithPopupFunc,
    signInWithPopupGitFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    loading,setLoading
  };
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
  },[])
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
