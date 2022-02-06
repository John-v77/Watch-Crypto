import React, { useState } from 'react';
import './auth.css'

function Auth(props) {

    const {isLoging} = props

    const [loginRequest, setLoginRequest] = useState({})

    const sendReq =(e)=>{
        console.log('sending request')
        e.preventDefault()

        if (loginRequest.email.trim().length === 0 ||
            loginRequest.password.trim().length === 0) return

        
    }

    const recordVal=(e)=>{
        setLoginRequest({...loginRequest, [e.target.name] : e.target.value})
        console.log('record value', loginRequest)
    }




    return (
        <div className='auth_form'>
            <form onSubmit={sendReq}>
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