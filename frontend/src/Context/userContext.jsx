import { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = (props) => {
    const [user,setUser] = useState(null);
    const value={
        user,
        setUser
    };
    return (
        <userContext.Provider value={value}>
            {props.children}
        </userContext.Provider>
    )
}