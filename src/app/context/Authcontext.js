'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthContext = createContext()
export const AuthcontextProvider = ({ children }) => {
    let [user, setUser] = useState(null)
    let [search, Setsearch] = useState('')
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const profileUpdate = async (updateUser = {}) => {
        setLoading(true);
        await updateProfile(auth.currentUser, updateUser);
        setUser((preUser) => ({ ...preUser, ...updateUser }));
    };
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider()
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    let flterBLogs = ((m) => {
        const lowerCaseSearch = search.toLowerCase();
        return (
            (!search ||
                m.title.toLowerCase().includes(lowerCaseSearch))
                || (m.tag && m.tag.some(tag => tag.toLowerCase().includes(lowerCaseSearch)))
        );
    })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        () => {
            unsubscribe();
        };
    }, []);
    let value = {
        user, loading, createUser, profileUpdate, googleLogin, logout, signIn, search, Setsearch, flterBLogs
    }
    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
};
export const UserAuth = () => {
    return useContext(AuthContext)
}
