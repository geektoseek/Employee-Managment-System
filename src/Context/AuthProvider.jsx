import React, { Children } from 'react'
import { useState, useEffect } from 'react';
import { createContext } from "react";
import { getLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [userdata, SetUserData] = useState(null);
    useEffect(() => {
        const { employees, admin } = getLocalStorage();
        SetUserData({ employees, admin })
    }, [])



    return (
        <div>
            <AuthContext.Provider value={userdata}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider