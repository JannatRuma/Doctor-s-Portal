import React, { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { getCurrentUser, handleSignOut } from '../components/Login/LoginManager';
export const userContext = createContext();
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getCurrentUser().then(res => {
        setUser(res)
    })
    }, [])

    const signOUtUser = () => {
        handleSignOut().then(res => {
        setUser(res)
    })
  }
    return (
       <userContext.Provider value={{user, setUser,signOUtUser }}>
           {children}
       </userContext.Provider>
    );
};

export default UserContextProvider;