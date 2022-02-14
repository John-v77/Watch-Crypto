import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../context';
import './navbar.css'



function NavBar(props) {

    const {user, logout} = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser =async (e)=>{
        await logout()
        navigate('/coinsList')

    }

    return (
        <div className='navBar'>
            <ul className='navBar__links'>
                <li> <Link to='/register'>Register</Link></li>
                <li> <Link to='/login'>Login</Link></li>
                <li> <Link to='/coinsList'>DashBoard</Link></li>
            </ul>

            <div>
                {user.userName &&
                <h4>Welcome: {user.userName} | 
                    <button className='logOut_btn' onClick={logoutUser}>LogOut</button>
                </h4>
                }
            </div>
 
        </div>
    );
}

export default NavBar;