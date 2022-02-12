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
    const logInContext =(userZ, token, tokenExp)=>  {
            setUser({  userName:userZ,    token:token,     tokenExpiration:tokenExp})
    }

    return(
        <UserContext.Provider value={{user, setUser, logInContext, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}

