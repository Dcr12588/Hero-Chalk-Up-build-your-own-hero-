import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import AuthContext from '../../store/authContext';

const Header = () => {

    const authCtx = useContext(AuthContext)
    return (
        <div className='nav'>
            <div className='title'>
            Hero Chalk Up
            </div>
            <nav>
            <NavLink className='loginBtn' to ="/auth"> login/register </NavLink>
            <NavLink className='homeBtn' to ="/"> Home  </NavLink>
            <NavLink className='addHeroBtn' to ="/addhero"> Add Hero </NavLink>
            <NavLink className='myHeroBtn' to ="/myhero"> My Hero </NavLink>
            </nav>
            <button className='logoutBtn' onClick= {() => authCtx.logout()}>Logout</button>
        </div>
    )
}

export default Header;