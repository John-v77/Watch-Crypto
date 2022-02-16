import React, { useState } from "react";

export const UserContext = React.createContext()

export const UserContextProvider =(props)=>{
    const [user, setUser] = useState({
        userName: null,
        token: null,
        tokenExpiration: null,
        id:null,
        votes:[]
    })

    const logout =()=> {
        setUser({  userName:null,
                   token:null,
                   tokenExpiration:null,
                   votes:[] 
                })
        console.log('logout', user)    
    }
    const logInContext =(userZ, token, tokenExp, id, votes)=>{
            setUser({  userName:userZ,
                       token:token,
                       tokenExpiration:tokenExp,
                       id: id,
                       votes: []
                    })
            console.log("newUser: ", user)
    }

    return(
        <UserContext.Provider value={{user, setUser, logInContext, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}

