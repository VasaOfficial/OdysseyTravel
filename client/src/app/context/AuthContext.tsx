'use client'
import { useContext, createContext, useState, useEffect, type ReactNode } from 'react'
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  type User,
} from 'firebase/auth'
import { auth } from '../lib/firebase/config'

interface AuthContextType {
  user: User | null
  logOut?: () => Promise<void>
  GithubSignIn?: () => Promise<void>
  GoogleSignIn?: () => Promise<void>
}

const defaultUser: AuthContextType = { user: null }

const AuthContext = createContext<AuthContextType>(defaultUser)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user;
      const token = await user.getIdToken();
      const email = user.email;

      // Send token to the backend
      const response = await fetch('bla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email, uid: user.uid }),
      });

      await response.json();
    } catch (error) {
      alert('Google Sign in failed')
    }
  }

  const GithubSignIn = async () => {
    const provider = new GithubAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user;
      const token = await user.getIdToken();
      const email = user.email;

      // Send token to the backend
      const response = await fetch('bla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email, uid: user.uid }),
      });

      await response.json();
    } catch (error) {
      alert('Github Sign in failed')
    }
  }

  const logOut = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [user])

  return (
    <AuthContext.Provider value={{ user, logOut, GithubSignIn, GoogleSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  if (typeof window !== 'undefined') {
    return useContext(AuthContext)
  } else {
    return defaultUser
  }
}
