import { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = (props) => {
    const [user,setUser] = useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const value={
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn
    };
    return (
        <userContext.Provider value={value}>
            {props.children}
        </userContext.Provider>
    )
}