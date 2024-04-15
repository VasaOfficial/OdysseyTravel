'use client'
import { useContext, createContext, useState, useEffect, type ReactNode } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, type User } from 'firebase/auth';
import { auth } from '../lib/firebase/config';

interface AuthContextType {
  user: User | null;
  logOut?: () => Promise<void>;
  GithubSignIn?: () => Promise<void>;
  GoogleSignIn?: () => Promise<void>;
}

const defaultUser: AuthContextType = { user: null };

const AuthContext = createContext<AuthContextType>(defaultUser);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle successful sign-in here (e.g., navigate to a different page)
      console.log(result);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  const GithubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle successful sign-in here (e.g., navigate to a different page)
      console.log(result);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, logOut, GithubSignIn, GoogleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};