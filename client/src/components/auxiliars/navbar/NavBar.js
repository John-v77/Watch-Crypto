import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'

function NavBar(props) {
    return (
        <div className='navBar'>
            <ul className='navBar__links'>
                <li> <Link to='/register'>Register</Link></li>
                <li> <Link to='/login'>Login</Link></li>
                <li> <Link to='/coinsList'>DashBoard</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;