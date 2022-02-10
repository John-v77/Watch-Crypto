import React, { useState } from "react";

export const UserContext = React.createContext()

export const UserContextProvider =(props)=>{
    const [user, setUser] = useState({
        userName:null,
        token:null,
        tokenExpiration:null
    })

    const logout =()=> setUser({  userName:null,    token:null,     tokenExpiration:null })
    const logIn =(user, token, tokenExp)=>  {
            setUser({  userName:user,    token:token,     tokenExpiration:tokenExp})
    }

    return(
        <UserContextProvider value={[user, setUser]}>
            {props.children}
        </UserContextProvider>
    )
}

