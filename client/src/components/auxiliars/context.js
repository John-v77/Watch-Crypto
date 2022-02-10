import React, { useState } from "react";

export const UserContext = React.createContext()

export const UserContextProvider =(props)=>{
    const [user, setUser] = useState({
        userName:'sa',
        token:'nsaull',
        tokenExpiration:'nulfdl'
    })

    const logout =()=> {
        setUser({  userName:null,    token:null,     tokenExpiration:null })
        console.log('logout', user)    
    }
    const logIn =(user, token, tokenExp)=>  {
            setUser({  userName:user,    token:token,     tokenExpiration:tokenExp})
    }

    return(
        <UserContext.Provider value={{user, setUser, logIn, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}

