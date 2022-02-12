import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from '../Context';
import './navbar.css'



function NavBar(props) {

    const {user, logout} = useContext(UserContext)

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
                    <button className='logOut_btn' onClick={logout}>LogOut</button>
                </h4>
                }
            </div>
 
        </div>
    );
}

export default NavBar;