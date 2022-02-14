import React, { useState } from "react";

export const UserContext = React.createContext()

export const UserContextProvider =(props)=>{
    const [user, setUser] = useState({
        userName: null,
        token: null,
        tokenExpiration: null,
        id:null
    })

    const logout =()=> {
        setUser({  userName:null,    token:null,     tokenExpiration:null })
        console.log('logout', user)    
    }
    const logInContext =(userZ, token, tokenExp, id)=>  {
            setUser({  userName:userZ,
                       token:token,
                       tokenExpiration:tokenExp,
                       id: id
                    })
    }

    return(
        <UserContext.Provider value={{user, setUser, logInContext, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}

