import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // ---> google login
    const googleLogIn = (provider) => {
        signInWithPopup(auth, provider)
    }

    // ---> handleCurrent user
    useEffect(() => {
        const unsuboscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser?.uid) {
                setUser(currentUser)
            }
        })

        return () => {
            unsuboscribe()
        }
    }, [])

    // ---> log out
    const logOut = () => {
        signOut(auth)
    }

    const authInfo = { user, googleLogIn, logOut }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;