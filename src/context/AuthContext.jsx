import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from "firebase/auth"
import { auth,db } from '../firebase/firebase.config'
import {setDoc,doc} from "firebase/firestore"
export const AuthState=createContext()

const AuthContext = ({children}) => {
    const [user,setUser]=useState(null)

    const signUp=(email,password)=>{
          createUserWithEmailAndPassword(auth,email,password)
          setDoc(doc(db,"users",email),{
            Watchlist:[]
          })
    }

    const logOut=()=>{
            return signOut(auth)
    }

    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
  return (
    <AuthState.Provider value={{signUp,user,logIn,logOut}}>
      {children}
    </AuthState.Provider>
  )
}

export default AuthContext
