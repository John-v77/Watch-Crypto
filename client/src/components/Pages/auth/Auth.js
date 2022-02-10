import React, { useContext, useState } from 'react';
import actions from '../../../api/api';
import { UserContext } from '../../auxiliars/Context';
import './auth.css'

function Auth(props) {

    //login Contex
    // const {user, setUser} = useContext(UserContext)
    // const login = UserContext(UserContext)

    const {isLoging} = props

    // object to be sent to API
    const [loginRequest, setLoginRequest] = useState({})

    // #1
    const sendReq =(e)=>{
        console.log('sending request')
        e.preventDefault()

        // check if input is not empty
        if (loginRequest.email.trim().length === 0 ||
            loginRequest.password.trim().length === 0) return


        //check if login in
        if (isLoging){
            actions.loginUser(loginRequest)
            .then(res =>{
                console.log(res, 'response')
                // setUser({
                //     userName:'sa',
                //     token:'nsaull',
                //     tokenExpiration:'nulfdl'
                // })
                // console.log(user, '1')
            })
            .catch(err => console.log(err))
            return
        }


        // if registering
        actions.registerUser(loginRequest)
                .then(res =>{
                    console.log(res, 'response register')
                    // setUser({
                    //     userName:'sa',
                    //     token:'nsaull',
                    //     tokenExpiration:'nulfdl'
                    // })
                    // console.log(user, '2')
                })
                .catch(err => console.log(err))

    }


    // #2
    const recordVal=(e)=>{
        setLoginRequest({...loginRequest, [e.target.name] : e.target.value})
    }




    return (
        <div className='auth_form'>
            <form onSubmit={sendReq}>
                {/* /Field just for Register page */}
                {!isLoging &&
                <>
                <label>Username</label>
                <input onChange={recordVal} type={'text'} placeholder='username' name='userName' data-show-if="EMAIL"/>
                </>}



                <label>Email</label>
                <input onChange={recordVal} type={'email'} placeholder='email' name='email'/>
                
                <label>Password</label>
                <input onChange={recordVal} type={'password'} placeholder='password' name='password'/>

                <button type='submit'>{isLoging ? 'Login' : 'Register'}</button>
                
            </form>
        </div>
    );
}

export default Auth;