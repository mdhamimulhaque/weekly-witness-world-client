import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    // ---> google login
    const googleLogIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // ---> create user (registration)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ---> logIn user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    // ---> handleCurrent user
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser?.uid) {
                setUser(currentUser)
                setLoading(false)
            }
        })

        return () => {
            unSubscribe()
        }
    }, [])

    // ---> log out
    const logOut = () => {
        setLoading(true)
        setUser({})
        return signOut(auth)
    }

    const authInfo = {
        user,
        googleLogIn,
        logOut,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;